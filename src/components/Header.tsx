import type React from "react";
import SearchBar from "./SearchBar";

interface HeaderProps {
    classes: string[];
    selectedClass: string;
    onClassChange: (cls: string) => void;
    onSearch: (query: string) => void;
    isSearching: boolean;
}

const Header: React.FC<HeaderProps> = ({
    classes,
    selectedClass,
    onClassChange,
    onSearch,
}) => {
    return (
        <div className="bg-gray-800 p-4 flex items-center justify-evenly shadow-md w-full">
            {/* Logo Section */}
            <h1 className="text-xl font-bold text-white">Seating Plan</h1>

            {/* Centered Search Bar */}
            <div className="flex flex-1 justify-center">
                <div className="w-full max-w-lg  flex justify-center items-center">
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>

            {/* Classes Section */}
            <div className="flex space-x-2">
                {classes.length > 0 ? (
                    classes.map((cls) => (
                        <button
                            key={cls}
                            className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                                cls === selectedClass
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                            onClick={() => onClassChange(cls)}
                        >
                            {cls}
                        </button>
                    ))
                ) : (
                    <span className="text-gray-400">No classes available</span>
                )}
            </div>
        </div>
    );
};

export default Header;
