import { Avatar } from "@mui/material";

interface ProfileCardProps {
    email: string;
    column: string;
    searchQuery: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ email, searchQuery }) => {
    const split = email.split(".");
    let name = split[0].trim(); // Ensure no leading/trailing spaces
    name = name === "" ? "Blank" : name.toUpperCase(); // Set "Blank" if empty

    const initials = name.slice(0, 1); // First letter for Avatar
    let rollNumber = "";

    if (split[1] !== undefined) {
        rollNumber = split[1].slice(5, 10);
    }

    const isHighlighted =
        searchQuery &&
        `${name} ${rollNumber}`.toLowerCase().includes(searchQuery.toLowerCase());

    if (name !== "Blank" && name !== "N/A") {
        const elementId = `student-${name}-${rollNumber}`.replace(/\s+/g, '-');
        
        return (
            <div
                id={elementId}
                className={`seat w-[100px] h-[100px] flex flex-col justify-center items-center border-2 transition-transform duration-300 ${
                    isHighlighted
                        ? "bg-yellow-400 text-black font-bold shadow-lg"
                        : "border-gray-500"
                } rounded-lg m-[1rem]`}
            >
                <Avatar className="w-[2rem] h-[2rem]">{initials}</Avatar>
                <span className="text-[11px] text-ellipsis">
                    {name} - {rollNumber}
                </span>
            </div>
        );
    } else {
        return (
            <div
                className="seat w-[100px] h-[100px] flex flex-col justify-center items-center border border-white-500 rounded-lg m-[1rem] opacity-15"
            >
                <Avatar className="w-[2rem] h-[2rem]">{initials}</Avatar>
                <span className="text-[10px]">
                    {name}
                </span>
            </div>
        );
    }
};

export default ProfileCard;
