"use client";
import Column from "./Column";
const OutlineTable = ({
    seatingPlan,
    searchQuery,
}: {
    seatingPlan: any;
    searchQuery: string;
}) => {

    // Check if seatingPlan is undefined or empty
    if (!seatingPlan || Object.keys(seatingPlan).length === 0) {
        return <div>No seating plan available.</div>;
    }

    const columns = Object.keys(seatingPlan);
    // console.log(columns);
    return (
        <div className="overflow-auto max-h-[100vh] w-[100vw] min-h-full flex gap-4 p-4 pt-0 bg-primary">
            {columns.map((item) => {
                // console.log(item);
                return (
                    <div
                        className={`flex flex-col flex-shrink-0 border border-[var(--border-color)] rounded-[1rem] 
                            transition-[transform,box-shadow] duration-200 ease-in-out flex-nowrap bg-[var(--surface-color)] margin mt-0 p-[1.25rem]`}
                        key={item}
                    >
                        <Column
                            columnName={item}
                            seatingPlan={seatingPlan[item][1]}
                            searchQuery={searchQuery}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default OutlineTable;
