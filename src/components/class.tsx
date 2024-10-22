import Seat, { viewSeat } from "./seat";
import "./class.css";

interface Class {
    cols: number;
    rows: number;
    colsPerEachRow: number[];
}

export const BuildClass = (classData: Class): Seat[][][] => {
    const numOfCols = classData.cols;
    const rowsPerCol = classData.rows;
    const colsPerEachRow = classData.colsPerEachRow;

    const classSeat: Seat[][][] = [];

    for (let i = 0; i < numOfCols; i++) {
        const currCol: Seat[][] = [];
        for (let j = 0; j < rowsPerCol; j++) {
            const currRow: Seat[] = [];
            for (let k = 0; k < colsPerEachRow[i]; k++) {
                const seat: Seat = {
                    col: i.toString(),
                    row: j.toString(),
                    seatLocation: k.toString(),
                    email: "",
                    isBlocked: false,
                };
                currRow.push(seat);
            }
            currCol.push(currRow);
        }
        classSeat.push(currCol);
    }

    return classSeat; // Now returning the correct type
};

export const ShowSeating = (classData: Class): JSX.Element => {
    const layout = BuildClass(classData); // layout is Seat[][][]

    return (
        <div className="class-container">
            {layout.map((col, colIndex) => (
                <div key={colIndex} className="column">
                    {col.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((seat, seatIndex) => viewSeat(seat))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Class;
