import { Avatar } from "@mui/material";

interface ProfileCardProps {
    email: string;
    column: string;
    searchQuery: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ email, searchQuery }) => {
    const split = email.split(".");
    let name = split[0].trim(); // Ensure no leading/trailing spaces
    name = name === "" ? "Blank" : name; // Set "Blank" if empty

    const initials = name.slice(0, 1); // First letter for Avatar
    let rollNumber = "";

    if (split[1] !== undefined) {
        rollNumber = split[1].split("@")[0].toUpperCase()
    }

    const isHighlighted =
        searchQuery &&
        `${name} ${rollNumber}`.toLowerCase().includes(searchQuery.toLowerCase());

        const elementId = `student-${name}-${rollNumber}`.replace(/\s+/g, '-');

        return (
            <div 
                className={`p-[0.625rem] rounded-md text-center text-sm min-h-[2.5rem] min-w-[250px] 
                            flex items-center justify-center transition-all duration-200 ease-in-out 
                            break-words flex-1 ${
                                name !== "Blank" && name !== "N/A" 
                                    ? "bg-[var(--seat-occupied-bg)] text-[var(--primary-color)]" 
                                    : "bg-[var(--background-color)]"
                            }`}
                id={elementId}
            >
                {name !== "Blank" && name !== "N/A" ? (
                    `${name} - ${rollNumber}`
                ) : (
                    <span className="invisible">PlaceHolder@24bcs10002</span>
                )}
            </div>
        );
        
};

export default ProfileCard;
