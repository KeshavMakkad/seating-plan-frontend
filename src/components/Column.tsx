interface ColumnInterface {
    columnName: string,
    seatingPlan: Array<Array<string>>
    searchQuery: string
}

import Row from "./Row"

const Column: React.FC<ColumnInterface> = ({columnName, seatingPlan, searchQuery}) => {
    console.log(seatingPlan);
    return <>
        <h3 className="mb-5 text-[var(--primary-color)] font-manrope text-lg font-semibold pb-3 border-b-2 border-[var(--border-color)]">
        {columnName}
        </h3>

        {seatingPlan.map((row, index) => {
            return <>
                <Row rowNumber={index} seatingRow={seatingPlan[index]} searchQuery={searchQuery} columnName={columnName} />
            </>
        })}
    </>
}

export default Column;

