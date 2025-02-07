import Row from "./Row";

const OutlineTable = ({ seating_plan }: any) => {
    let classToggle = true;

    return (
        <div className="overflow-auto max-h-[1000vh] w-[100vw] min-h-full ">
            <table className="relative overflow-auto w-[100vw] border border-gray-700">
                <thead className="relative">
                    <tr className="text-center sticky-header-row top-0 bg-gray-900 text-white static top-0 w-[100%]">
                        <th className="sticky left-0 bg-gray-800 text-white p-2">
                            Row
                        </th>
                        {Object.keys(seating_plan).map((key, index) => {
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
                    {Object.keys(
                        seating_plan[Object.keys(seating_plan)[0]][1]
                    ).map((_, rowIndex) => (
                        <Row
                            key={rowIndex}
                            rowNumber={rowIndex}
                            seating_plan={seating_plan}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OutlineTable;
