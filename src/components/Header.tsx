import type React from "react";
import SearchBar from "./SearchBar";
import { useTheme } from "./../styles/ThemesContext";
import { MoonIcon, SunIcon } from "lucide-react"; // Install lucide-react if needed

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
    const { theme, toggleTheme } = useTheme();

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
            <div className="flex space-x-2 items-center">
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

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md transition-colors bg-gray-700 text-gray-300 hover:bg-gray-600"
                >
                    {theme === "light" ? <MoonIcon size={20} /> : <SunIcon size={20} />}
                </button>
            </div>
        </div>
    );
};

export default Header;
