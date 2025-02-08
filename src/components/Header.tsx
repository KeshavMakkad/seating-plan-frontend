import React from "react";

// Define the types for the props
interface HeaderProps {
    classes: string[]; // Array of class names (strings)
    selectedClass: string; // The selected class (string)
    onClassChange: (cls: string) => void; // Function to handle class change
}

const Header: React.FC<HeaderProps> = ({
    classes,
    selectedClass,
    onClassChange,
}) => {
    return (
        <div className="bg-gray-800 p-4 flex items-center justify-between shadow-md">
            <h1 className="text-xl font-bold">Seating Plan</h1>
            <div className="flex space-x-3">
                {classes.map((cls) => (
                    <button
                        key={cls}
                        className={`px-4 py-2 rounded-lg transition ${
                            cls === selectedClass
                                ? "bg-blue-500 text-white"
                                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                        }`}
                        onClick={() => onClassChange(cls)}
                    >
                        {cls}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Header;
