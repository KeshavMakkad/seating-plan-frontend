import { useState } from "react";

export const GroupUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [csvArray, setCsvArray] = useState<string[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (!selectedFile) return;

        setFile(selectedFile);

        const reader = new FileReader();

        reader.onload = (e) => {
            if (e.target) {
                const text = e.target.result as string;
                const newCsvArray = text.split("\n");
                setCsvArray(newCsvArray);
                console.log("CSV Array:", newCsvArray); // This will show the parsed data
            }
        };

        reader.readAsText(selectedFile);
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".csv" />
            {csvArray.length > 0 && (
                <div>
                    <p>Number of rows: {csvArray.length}</p>
                </div>
            )}
        </div>
    );
};
