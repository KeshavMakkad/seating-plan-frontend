import ProfileCard from "./Profile";

interface BuildRow {
    rowNumber: number;
    seating_plan: { [key: string]: any[] };
    searchQuery: string;
}

const Row: React.FC<BuildRow> = ({ rowNumber, seating_plan, searchQuery }) => {
    // let index: number = 0;
    let classToggle = false;
    return (
        <tr>
            <td className="sticky left-0 text-center bg-gray-500 opacity-100">
                {rowNumber}
            </td>
            {Object.keys(seating_plan).map((key) => {
                classToggle = !classToggle;
                let firstColumn = key;
                // let numberOfDesks = seating_plan[firstColumn][0];
                let deskSeating = seating_plan[firstColumn][1][rowNumber];
                return (
                    <td
                        className={`p-8 ${
                            classToggle ? "bg-gray-800" : "bg-gray-900"
                        }`}
                    >
                        <div className="flex justify-evenly">
                            {deskSeating.map((email: string) => {
                                return (
                                    <ProfileCard
                                        email={email}
                                        column={key}
                                        searchQuery={searchQuery}
                                    />
                                );
                                // return email + " ";
                            })}
                            {/* {deskSeating.length} */}
                        </div>
                    </td>
                );
            })}
        </tr>

        // <div>Hello</div>
    );
};

export default Row;
