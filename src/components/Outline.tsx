"use client";

import Row from "./Row";
const OutlineTable = ({
    seatingPlan,
    searchQuery,
}: {
    seatingPlan: any;
    searchQuery: string;
}) => {
    // const [searchQuery, setSearchQuery] = useState("");
    let classToggle = true;

    // Check if seatingPlan is undefined or empty
    if (!seatingPlan || Object.keys(seatingPlan).length === 0) {
        return <div>No seating plan available.</div>;
    }

    const columns = Object.keys(seatingPlan);
    const rows = Object.keys(seatingPlan[columns[0]][1]);

    return (
        <div className="overflow-auto max-h-[100vh] w-[100vw] min-h-full">
            {/* <SearchBar onSearch={setSearchQuery} /> */}
            <table className="relative overflow-auto w-[100vw] border border-gray-700">
                <thead className="relative">
                    <tr className="text-center sticky-header-row top-0 bg-gray-900 text-white static top-0 w-[100%]">
                        <th className="sticky left-0 bg-gray-800 text-white p-2">
                            Row
                        </th>
                        {columns.map((key, index) => {
                            classToggle = !classToggle;
                            return (
                                <th
                                    key={index}
                                    className={`p-2 text-[12px] opacity-100 ${
                                        classToggle
                                            ? "bg-gray-800"
                                            : "bg-gray-900"
                                    }`}
                                >
                                    {key}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody className="w-auto">
                    {rows.map((_, rowIndex) => (
                        <Row
                            key={rowIndex}
                            rowNumber={rowIndex}
                            seating_plan={seatingPlan}
                            searchQuery={searchQuery}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OutlineTable;
