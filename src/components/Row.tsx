import ProfileCard from "./Profile";

interface BuildRow {
    columnName: string;
    rowNumber: number;
    seatingRow: string[];
    searchQuery: string;
}

const Row: React.FC<BuildRow> = ({ rowNumber, seatingRow, searchQuery, columnName }) => {
    return (
        <div className="flex items-center gap-3 mb-3" data-row-number={rowNumber}>
            {/* Sticky Row Number with Animation */}
            <div className="sticky left-0 px-2 py-1 z-10 min-h-[2rem] min-w-[1.8rem] rounded 
                            flex items-center justify-center bg-[var(--background-color)] 
                            text-[var(--text-secondary)] text-[15px] font-medium text-center
                            transition-all duration-300 ease-in-out shadow-md 
                            hover:scale-110 hover:bg-[var(--primary-color)] hover:text-white">
                {rowNumber + 1}
            </div>

            {/* Seating Profiles */}
            {seatingRow.map((email, index) => (
                <ProfileCard 
                    key={index} 
                    email={email} 
                    column={columnName} 
                    searchQuery={searchQuery} 
                />
            ))}
        </div>
    );
};

export default Row;
