import { useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GroupUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [csvArray, setCsvArray] = useState<string[]>([]);

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) {
            toast.error("No file selected", { transition: Slide });
            return;
        }

        setFile(selectedFile);
        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target) {
                const text = e.target.result as string;
                const newCsvArray = text.split("\n");
                setCsvArray(newCsvArray);
                console.log("CSV Array:", newCsvArray);
                toast.success("File uploaded successfully!", {
                    transition: Slide,
                });
            }
        };

        reader.onerror = () => {
            toast.error("Failed to read the file", { transition: Slide });
        };

        reader.readAsText(selectedFile);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".csv" />
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
        </div>
    );
};
