interface ColumnInterface {
    columnName: string;
    seatingPlan: Array<Array<string>>;
    searchQuery: string;
}

import Row from "./Row";

const Column: React.FC<ColumnInterface> = ({
    columnName,
    seatingPlan,
    searchQuery,
}) => {
    return (
        <div data-column-name={columnName} className="text-[var(--text-color)]">
            {/* Sticky on horizontal scroll with animation */}
            <div className="w-full border-b-2 border-[var(--border-color)] pb-3 mb-5">
                <h3 className="text-[var(--primary-color)] font-manrope text-lg font-semibold border-[var(--border-color)] sticky left-0 bg-[var(--background-primary)] z-10 w-fit px-2 py-1 transition-all duration-300 ease-in-out shadow-none will-change-transform">
                    {columnName}
                </h3>
            </div>

            {/* Rows */}
            {seatingPlan.map((_, index) => (
                <Row
                    key={index}
                    rowNumber={index}
                    seatingRow={seatingPlan[index]}
                    searchQuery={searchQuery}
                    columnName={columnName}
                />
            ))}
        </div>
    );
};

export default Column;