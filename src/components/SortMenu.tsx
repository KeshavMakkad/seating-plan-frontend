import { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SortMenuProps {
    sortSeating: (sortBy: string, sortOrder: string) => void;
}

const SortMenu: React.FC<SortMenuProps> = ({ sortSeating }) => {
    const [isActive, setIsActive] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Date");
    const [sortOrder, setSortOrder] = useState("asc");

    const toggleActive = () => {
        setIsActive(!isActive);
    };

    const handleSelect = (item: string) => {
        setSelectedSort(item);
        sortSeating(item, sortOrder);
        setIsActive(false);
    };

    const toggleSortOrder = () => {
        const newOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newOrder);
        sortSeating(selectedSort, newOrder);
    };

    return (
        <div className="flex items-center justify-center font-sans rounded-lg">
            <button
                className="text-[var(--primary-color)] p-2 hover:bg-[var(--surface-color)] transition duration-300 rounded-full hover:shadow-lg"
                onClick={toggleSortOrder}
            >
                {sortOrder === "asc" ? <ArrowUp /> : <ArrowDown />}
            </button>

            <div className="relative w-fit pr-4 flex gap-2 justify-evenly items-center">
                <button
                    onClick={toggleActive}
                    className="w-full hover:bg-[var(--surface-color)] px-3 py-2 rounded-3xl flex justify-between items-center text-gray-800 font-medium transition duration-300 hover:shadow-lg"
                >
                    <span className="text-[var(--primary-color)] pr-2">
                        {selectedSort}
                    </span>
                    <span
                        className={`transform transition-transform duration-300 text-[var(--primary-color)] ${
                            isActive ? "rotate-180" : ""
                        }`}
                    >
                        ▼
                    </span>
                </button>

                <ul
                    className={`absolute top-full left-0 w-full bg-[var(--surface-color)] shadow-md rounded-lg mt-2 transition-all duration-300 text-[var(--primary-color)] overflow-hidden ${
                        isActive ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
                    }`}
                >
                    {["Name", "Date", "Next", "Recent"].map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item)}
                            className="p-3 hover:bg-[var(--background-color)] cursor-pointer text-center text-lg"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SortMenu;
