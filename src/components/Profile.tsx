import { Avatar } from "@mui/material";

interface ProfileCardProps {
    email: string;
    column: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ email, column }) => {
    const split = email.split(".");
    let name = split[0].trim(); // Ensure no leading/trailing spaces
    name = name === "" ? "Blank" : name.toUpperCase(); // Set "Blank" if empty

    const initials = name.slice(0, 1); // First letter for Avatar
    let rollNumber = "";

    if (split[1] !== undefined) {
        rollNumber = split[1].slice(5, 10);
    }

    if (name !== "Blank") {
        return (
            <>
                <div
                    id={`${name} ${rollNumber}`}
                    className="seat w-[100px] h-[100px] flex flex-col justify-center items-center border border-white-500 rounded-lg m-[1rem]"
                >
                    <Avatar className="w-[2rem] h-[2rem]">{initials}</Avatar>
                    <span
                        className={`text-[10px] text-ellipsis ${"opacity-100"}`}
                    >
                        {name} - {rollNumber}
                    </span>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div
                    id={`${name} ${rollNumber}`}
                    className="seat w-[100px] h-[100px] flex flex-col justify-center items-center border border-white-500 rounded-lg m-[1rem] opacity-15"
                >
                    <Avatar className="w-[2rem] h-[2rem]">{initials}</Avatar>
                    <span className={`text-[10px]  ${"opacity-100"}`}>
                        {name}
                    </span>
                </div>
            </>
        );
    }
};

export default ProfileCard;
