import SortMenu from "./SortMenu";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../utils/ThemesContext";
import { useBlurEffect } from "../utils/useBlurEffect";
import SearchBar from "./SearchBar";

interface HomeHeaderProps {
    sortSeating: (sortBy: string, sortOrder: string) => void;
    onSearch: (query: string) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ sortSeating, onSearch }) => {
    const { theme, toggleTheme } = useTheme();
    const { showBlur, triggerBlurEffect } = useBlurEffect();

    const handleSearch = (query: string) => {
        onSearch(query);
    };    

    return (
        <div className="relative flex items-center justify-between w-full px-4">
            {/* Search Bar on the left */}
            <SearchBar onSearch={handleSearch} />
    
            {/* Sort Menu and Theme Toggle on the right */}
            <div className="flex items-center space-x-4">
                <SortMenu sortSeating={sortSeating} />
    
                {showBlur && (
                    <div
                        className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out 
                    ${theme === "light" ? "bg-white/30" : "bg-black/30"} 
                    backdrop-blur-xl`}
                    />
                )}
    
                <button
                    onClick={() => triggerBlurEffect(toggleTheme)}
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
        </div>
    );    
};

export default HomeHeader;
