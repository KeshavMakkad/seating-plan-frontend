import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OutlineTable from "./../components/Outline";
import Header from "../components/ClassHeader";
import fetchSeating from "./../context/fetchSeating";

const SeatingPlan = () => {
    const { name } = useParams<{ name?: string }>();
    const [seatingPlan, setSeatingPlan] = useState<any>(null);
    const [classes, setClasses] = useState<string[]>([]);
    const [selectedClass, setSelectedClass] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState<{
        name: string;
        row: number;
        column: string;
        class: string;
    } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (name) {
                const data = await fetchSeating(name);
                setSeatingPlan(data.data);
            } else {
                console.error("Name is undefined, cannot fetch seating data.");
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (seatingPlan?.classrooms) {
            const classroomNames = Object.keys(seatingPlan.classrooms);
            if (classroomNames.length > 0) {
                setClasses(classroomNames);
                setSelectedClass((prev) => prev || classroomNames[0]);
            }
        }
    }, [seatingPlan]);

    const handleClassChange = (cls: string) => {
        setSelectedClass(cls);
    };

    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        if (query === "") setIsSearching(false);
        if (query) {
            setIsSearching(true);
            const found = sameClassSearch(query);
            if (!found) {
                await acrossClassSearch(query);
            }
            setIsSearching(false);
        }
    };

    const sameClassSearch = (query: string) => {
        // Clear all highlighted elements first
        const allHighlightedElements = document.querySelectorAll('[style*="background-color"]');
        allHighlightedElements.forEach(el => {
            (el as HTMLElement).style.removeProperty('background-color');
            (el as HTMLElement).style.removeProperty('color');
            el.classList.remove('scale-110', 'transition-all', 'duration-300', 'ease-in-out');
        });

        if (!query) {
            setSearchResult(null);
            return false;
        }

        const searchText = query.toLowerCase().trim();
        const elements = document.querySelectorAll(`div[class*="text-center"]`);
        const matchingElements = Array.from(elements).filter((el) => {
            const content = el.textContent?.toLowerCase() || "";
            if (content === searchText) return true;
            const words = content.split(/[\s-]+/);
            if (words.some((word) => word === searchText)) return true;
            if (words.some((word) => word.startsWith(searchText))) return true;
            const searchParts = searchText.split(/[\s-]+/);
            if (searchParts.length > 1) {
                return searchParts.every((part) =>
                    words.some((word) => word.startsWith(part))
                );
            }

            return false;
        });

        if (matchingElements.length > 0) {
            const element = matchingElements[0];
            const cell = element.closest('div[class*="bg-["]') || element;
            const name = element.textContent || "";
            const rowElement = cell.closest("[data-row-number]");
            const columnElement = cell.closest("[data-column-name]");

            if (rowElement && columnElement) {
                setSearchResult({
                    name,
                    row: parseInt(
                        rowElement.getAttribute("data-row-number") || "0"
                    ),
                    column:
                        columnElement.getAttribute("data-column-name") || "",
                    class: selectedClass,
                });
            }
            cell.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "end",
            });
            (cell as HTMLElement).style.backgroundColor = 'rgba(78, 88, 223, 0.575)';
            cell.classList.add('scale-110', 'transition-all', 'duration-300', 'ease-in-out');
            (cell as HTMLElement).style.color = 'rgb(255, 255, 255)';
            return true;
        }
        setSearchResult(null);
        return false;
    };

    const acrossClassSearch = async (query: string) => {
        if (!query) return;

        const searchText = query.toLowerCase().trim();
        const currentClass = selectedClass;

        for (const classroom of classes) {
            if (classroom === currentClass) continue;
            setSelectedClass(classroom);
            await new Promise((resolve) => setTimeout(resolve, 300));

            const found = sameClassSearch(searchText);
            if (found) {
                return;
            }
        }
        setSelectedClass(currentClass);
    };

    return (
        <div className="h-screen relative">
            {seatingPlan && classes.length > 0 ? (
                <>
                    <Header
                        classes={classes}
                        selectedClass={selectedClass}
                        onClassChange={handleClassChange}
                        onSearch={handleSearch}
                        // isSearching={isSearching}
                    />

                    {searchResult && (
                        <div className="bg-gradient-to-b from-[var(--background-secondary)] to-[var(--background-secondary)] bg-opacity-90 backdrop-blur-lg py-3 px-10 shadow-md mx-2 mb-2 rounded-lg border border-[var(--border-color)] flex items-center justify-between text-sm sm:text-base">
                            <span className="text-[var(--text-primary)] font-semibold truncate">
                                {searchResult.name.charAt(0).toUpperCase() +
                                    searchResult.name.slice(1)}
                            </span>
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-bold">
                                {searchResult.class} -{" "}
                                {searchResult.column.split(" ")[1]}
                                {searchResult.row + 1}
                            </div>
                        </div>
                    )}

                    <div className="flex-grow overflow-auto relative bg-[var(--background-color)]">
                        {isSearching && (
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-50">
                                <div className="text-white bg-black/50 px-4 py-2 rounded-md">
                                    Searching across classes...
                                </div>
                            </div>
                        )}
                        <OutlineTable
                            seatingPlan={seatingPlan.classrooms[selectedClass]}
                            searchQuery={searchQuery}
                        />
                    </div>
                </>
            ) : (
                // Blur screen with animated loading spinner
                <div className="absolute inset-0 bg-[var(--background-color)] bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-50 backdrop-blur-xl">
                    <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
};

export default SeatingPlan;
