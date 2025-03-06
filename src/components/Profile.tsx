interface ProfileCardProps {
    email: string;
    column: string;
    searchQuery: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ email }) => {
    const split = email.split(".");
    let name = split[0].trim();
    name = name === "" ? "Blank" : name;

    let rollNumber = "";

    if (split[1] !== undefined) {
        rollNumber = split[1].split("@")[0].toUpperCase();
    }

    const elementId = `student-${name}-${rollNumber}`.replace(/\s+/g, '-');

    return (
        <div
            className={`p-[0.450rem] md:p-[0.625rem] rounded-sm md:rounded-md text-center text-xs md:text-sm 
                        min-h-[2rem] md:min-h-[2.5rem] min-w-[150px] md:min-w-[250px] 
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
