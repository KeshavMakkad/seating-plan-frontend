import ProfileCard from "./Profile";

interface BuildRow {
    columnName: string;
    rowNumber: number;
    seatingRow: string[];
    searchQuery: string;
}

const Row: React.FC<BuildRow> = ({ rowNumber, seatingRow, searchQuery, columnName }) => {
    // let index: number = 0;
    // console.log(rowNumber, seatingRow)
    return (
        // <tr>
        //     <td className="">
        //         {rowNumber}
        //     </td>
        //     {/* {Object.keys(seating_plan).map((key) => {
        //         classToggle = !classToggle;
        //         let firstColumn = key;
        //         // let numberOfDesks = seating_plan[firstColumn][0];
        //         let deskSeating = seating_plan[firstColumn][1][rowNumber];
        //         return (
        //             <td
        //                 className={`p-8 ${
        //                     classToggle ? "bg-gray-800" : "bg-gray-900"
        //                 }`}
        //             >
        //                 <div className="flex justify-evenly">
        //                     {deskSeating.map((email: string) => {
        //                         return (
        //                             <ProfileCard
        //                                 email={email}
        //                                 column={key}
        //                                 searchQuery={searchQuery}
        //                             />
        //                         );
        //                         // return email + " ";
        //                     })}
        //                 </div>
        //             </td>
        //         );
        //     })} */}
        // </tr>
        <div className="flex items-center gap-3 mb-3" data-row-number={rowNumber}>
            <p className="text-[var(--text-secondary)] text-xs font-medium text-right w-6">
                {rowNumber}
            </p>
            {seatingRow.map((email) =>  {
                return <ProfileCard email={email} column={columnName} searchQuery={searchQuery} />
            })}
        </div>
    );
};

export default Row;
