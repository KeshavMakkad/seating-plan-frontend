interface ColumnInterface {
    columnName: string,
    seatingPlan: Array<Array<string>>
    searchQuery: string
}

import Row from "./Row"

const Column: React.FC<ColumnInterface> = ({columnName, seatingPlan, searchQuery}) => {
    // console.log(seatingPlan);
    return (
        <div data-column-name={columnName} className="text-[var(--text-color)]">
            <h3 className="mb-5 text-[var(--primary-color)] font-manrope text-lg font-semibold pb-3 border-b-2 border-[var(--border-color)]">
                {columnName}
            </h3>

            {seatingPlan.map((_, index) => {
                return <>
                    <Row rowNumber={index} seatingRow={seatingPlan[index]} searchQuery={searchQuery} columnName={columnName} />
                </>
            })}
        </div>
    );
}

export default Column;

