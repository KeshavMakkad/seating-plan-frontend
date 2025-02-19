import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import OutlineTable from "./../components/Outline";
import Header from "./../components/Header";
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
                console.log("Setting classes:", classroomNames);
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
        if (!query) {
            setSearchResult(null);
            const highlightedElements = document.querySelectorAll('.bg-yellow-300');
            highlightedElements.forEach(el => {
                el.classList.remove('bg-yellow-300', 'scale-110');
            });
            return false;
        }
        
        const searchText = query.toLowerCase().trim();
        const highlightedElements = document.querySelectorAll('.bg-yellow-300');
        highlightedElements.forEach(el => {
            el.classList.remove('bg-yellow-300', 'scale-110');
        });
        const elements = document.querySelectorAll(`div[class*="text-center"]`);
        const matchingElements = Array.from(elements).filter(el => {
            const content = el.textContent?.toLowerCase() || '';
            if (content === searchText) return true;
            const words = content.split(/[\s-]+/);
            if (words.some(word => word === searchText)) return true;
            if (words.some(word => word.startsWith(searchText))) return true;
            const searchParts = searchText.split(/[\s-]+/);
            if (searchParts.length > 1) {
                return searchParts.every(part => 
                    words.some(word => word.startsWith(part))
                );
            }
            
            return false;
        });
        
        if (matchingElements.length > 0) {
            const element = matchingElements[0];            
            const cell = element.closest('div[class*="bg-["]') || element;
            const name = element.textContent || '';            
            const rowElement = cell.closest('[data-row-number]');
            const columnElement = cell.closest('[data-column-name]');
            
            if (rowElement && columnElement) {
                setSearchResult({
                    name,
                    row: parseInt(rowElement.getAttribute('data-row-number') || '0'),
                    column: columnElement.getAttribute('data-column-name') || '',
                    class: selectedClass
                });
            }
            cell.scrollIntoView({
                behavior: 'smooth',
                block: 'end',
                inline: 'end'
            });
            cell.classList.add('bg-yellow-300', 'scale-110', 'transition-all', 'duration-300', 'ease-in-out');
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
            await new Promise(resolve => setTimeout(resolve, 300));
            
            const found = sameClassSearch(searchText);
            if (found) {
                return;
            }
        }
        setSelectedClass(currentClass);
    };

    return (
        <div className="h-screen">
            {seatingPlan && classes.length > 0 ? (
                <>
                    <Header
                        classes={classes}
                        selectedClass={selectedClass}
                        onClassChange={handleClassChange}
                        onSearch={handleSearch}
                        isSearching={isSearching}
                    />

                    {searchResult && (
                        <div className="bg-[var(--background-secondary)] p-4 shadow-md mx-4 rounded-md">
                            <div className="text-[var(--text-primary)]">
                                <span className="font-semibold">{searchResult.name}</span> is seated in:
                                <span className="ml-2 text-[var(--primary-color)]">
                                    {searchResult.class}, Row {searchResult.row + 1}, {searchResult.column}
                                </span>
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
                <div className="flex primary items-center justify-center h-full">
                    <p className="text-white text-lg">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default SeatingPlan;
