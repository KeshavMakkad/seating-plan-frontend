const OutlineTable = ({ seating_plan }: any) => {
    console.log(seating_plan);
    let classToggle = true;

    return (
        <div className="overflow-auto max-h-[60vh]">
            <table className="table-fixed relative w-full">
                <thead className="relative">
                    <tr className="text-center sticky-header-row top-0 bg-gray-900 text-white">
                        <th className="sticky left-0 bg-gray-900 text-white p-2">Row</th>
                        {Object.keys(seating_plan).map((key, index) => {
                            classToggle = !classToggle;
                            return (
                                <th
                                    key={index}
                                    className={`p-2 text-[12px] opacity-100 ${
                                        classToggle ? 'bg-gray-800' : 'bg-gray-900'
                                    }`}
                                >
                                    {key}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                
            </table>
        </div>
    );
};

export default OutlineTable;