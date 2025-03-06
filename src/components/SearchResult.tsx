import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

interface Position {
    row: number;
    column: string;
    class: string;
}

interface SearchResultItem {
    name: string;
    positions: Position[];
}

interface SearchResultProps {
    searchResult: SearchResultItem[];
}

const SearchResult: React.FC<SearchResultProps> = ({ searchResult }) => {
    const [currIndex, setCurrIndex] = useState<number>(0);
    useEffect(() => {
        setCurrIndex(0);
    }, [searchResult]);

    const goToPrevious = () => {
        setCurrIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : searchResult.length - 1
        );
    };

    const goToNext = () => {
        setCurrIndex((prevIndex) => 
            prevIndex < searchResult.length - 1 ? prevIndex + 1 : 0
        );
    };

    const currResult = searchResult[currIndex];

    return (
        <div className="flex flex-col items-center w-full gap-2">
            <div className="flex sm:flex-row items-center justify-between w-full gap-2 sm:gap-0">  
                <button 
                    onClick={goToPrevious} 
                    className="p-2 sm:p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Previous result"
                >
                    <ChevronLeft className="h-6 w-6 sm:h-6 sm:w-6" />
                </button>
                <div className="bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background-secondary)] bg-opacity-90 backdrop-blur-lg py-2 sm:py-3 px-4 sm:px-10 shadow-md mx-1 sm:mx-2 mb-2 rounded-lg border border-[var(--border-color)] flex flex-col gap-2 sm:gap-4 flex-grow w-full sm:w-auto">
                    <div className="flex sm:flex-row justify-between gap-2">
                        <div className="text-[var(--text-primary)] font-semibold truncate text-sm sm:text-base content-center">
                            {currResult.name.charAt(0).toUpperCase() +
                                currResult.name.slice(1)}
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                            {currResult.positions.map((pos, index) => (
                                <div
                                    key={index}
                                    className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded-md text-sm font-bold"
                                >
                                    {pos.class} - {pos.column.split(" ")[1]}
                                    {pos.row + 1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button 
                    onClick={goToNext} 
                    className="p-2 sm:p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Next result"
                >
                    <ChevronRight className="h-6 w-6 sm:h-6 sm:w-6" />
                </button>
            </div>
            <div className="flex justify-center space-x-2 pb-2">
                {searchResult.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                            index === currIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SearchResult;
