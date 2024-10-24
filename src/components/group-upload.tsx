import { useState, useContext } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GroupContext, Group } from "./../contexts/group-context";

export const GroupUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [csvArray, setCsvArray] = useState<string[]>([]);
    const groupContext = useContext(GroupContext);

    const processCSVData = async (fileName: string, csvData: string[]) => {
        try {
            const groupName = fileName.replace(".csv", "");

            const members = csvData
                .map((line) => line.trim())
                .filter((line) => line.length > 0);

            if (members.length === 0) {
                toast.error("No valid members found in the CSV file", {
                    transition: Slide,
                });
                return;
            }

            const group: Group = {
                groupName,
                groupMembers: members,
            };

            try {
                const existingGroup = await groupContext.getGroup(groupName);
                if (existingGroup) {
                    await groupContext.updateGroup(groupName, group);
                    toast.success(
                        `Group '${groupName}' updated successfully!`,
                        { transition: Slide }
                    );
                } else {
                    await groupContext.addGroup(group);
                    toast.success(
                        `Group '${groupName}' created successfully!`,
                        { transition: Slide }
                    );
                }
            } catch (error: any) {
                toast.error(`Failed to process group: ${error.message}`, {
                    transition: Slide,
                });
            }
        } catch (error: any) {
            toast.error(`Failed to process file: ${error.message}`, {
                transition: Slide,
            });
        }
    };

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) {
            toast.error("No file selected", { transition: Slide });
            return;
        }

        if (!selectedFile.name.endsWith(".csv")) {
            toast.error("Please select a CSV file", { transition: Slide });
            return;
        }

        setFile(selectedFile);
        const reader = new FileReader();

        reader.onload = async (e) => {
            if (e.target) {
                const text = e.target.result as string;
                const newCsvArray = text.split("\n");
                setCsvArray(newCsvArray);
                await processCSVData(selectedFile.name, newCsvArray);
            }
        };

        reader.onerror = () => {
            toast.error("Failed to read the file", { transition: Slide });
        };

        reader.readAsText(selectedFile);
    };

    return (
        <div className="w-full max-w-md p-4">
            <label
                htmlFor="file-upload"
                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
            >
                <span className="flex items-center space-x-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                    </svg>
                    <span className="font-medium text-gray-600">
                        Drop CSV file or click to select
                    </span>
                </span>
                <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={handleFileUpload}
                    accept=".csv"
                />
            </label>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="colored"
                transition={Slide}
            />

            {file && (
                <p className="mt-2 text-sm text-gray-500">
                    Selected file: {file.name}
                </p>
            )}
        </div>
    );
};
