import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useTheme } from "./../styles/ThemesContext";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon, HomeIcon } from "lucide-react"; // Install lucide-react if needed

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
    const [showBlur, setShowBlur] = useState(false);
    const navigate = useNavigate();

    // Reusable blur effect function
    const showBlurEffect = (callback: () => void) => {
        setShowBlur(true);
        setTimeout(() => {
            callback();
        }, 150);
        setTimeout(() => {
            setShowBlur(false);
        }, 500);
    };

    // Handle theme change with blur effect
    const handleThemeChange = () => {
        showBlurEffect(toggleTheme);
    };

    // Handle class change with blur effect
    const handleClassChange = (cls: string) => {
        if (cls !== selectedClass) {
            showBlurEffect(() => onClassChange(cls));
        }
    };

    return (
        <div className="relative">
            {/* Full-Screen Blur Effect */}
            {showBlur && (
                <div
                    className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out 
                    ${theme === "light" ? "bg-white/30" : "bg-black/30"} 
                    backdrop-blur-xl`}
                />
            )}

            <div className="bg-[var(--surface-color)] border-b border-[var(--border-color)] shadow-md w-full px-8 sm:px-3 py-3 flex items-center justify-between">
                {/* Home Button */}
                <button
                    className="p-2 text-[var(--primary-color)] h-10 w-10 hover:cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <HomeIcon size={24} />
                </button>

                {/* Search Bar */}
                <div className="flex-1 mx-4 max-w-lg flex justify-center">
                    <SearchBar onSearch={onSearch} />
                </div>

                {/* Theme Toggle Button */}
                <button
                    onClick={handleThemeChange}
                    className="relative w-10 h-10 rounded-full border-4 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 
                               shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out"
                >
                    {theme === "light" ? (
                        <MoonIcon className="text-gray-500 transition-transform duration-300 ease-in-out scale-100" size={24} />
                    ) : (
                        <SunIcon className="text-yellow-300 transition-transform duration-300 ease-in-out scale-100" size={24} />
                    )}
                </button>
            </div>

            {/* Class Selection Section */}
            <div className="bg-[var(--background-color)] p-2 flex justify-center space-x-2 flex-wrap md:flex-nowrap">
                {classes.length > 0 ? (
                    classes.map((cls) => (
                        <button
                            key={cls}
                            className={`px-4 py-2 rounded-lg transition cursor-pointer ${
                                cls === selectedClass
                                    ? "bg-[var(--primary-light)] text-[var(--background-color)] font-semibold shadow-md"
                                    : "bg-[var(--surface-color)] text-[var(--primary-color)]"
                            }`}
                            onClick={() => handleClassChange(cls)}
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
