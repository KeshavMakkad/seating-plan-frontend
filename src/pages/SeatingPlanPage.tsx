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

    const sameClassSearch = (query: string) => {
        if (!query) return;
        
        const searchText = query.toUpperCase().trim();
        const nameMatch = searchText.match(/^([A-Z]+)/);
        const idMatch = searchText.match(/^(\d+)/);
        
        let elements = null;
        
        if (nameMatch) {
            const searchName = nameMatch[1];
            elements = document.querySelectorAll(`[id^="student-${searchName}"]`);
        } else if (idMatch) {
            const searchId = idMatch[1];
            elements = document.querySelectorAll(`[id$="-${searchId}"]`);
        }
        
        if (elements && elements.length > 0) {
            const element = elements[0];
            const cell = element.closest('td');
            if (cell) {
                cell.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                    inline: 'center'
                });
                
                element.classList.add('scale-110');
                setTimeout(() => {
                    element.classList.remove('scale-110');
                }, 1000);
            }
        }
    };

    const acrossClassSearch = async (query: string) => {
        if (!query) return;
        
        const searchText = query.toUpperCase().trim();
        const nameMatch = searchText.match(/^([A-Z]+)/);
        const idMatch = searchText.match(/^(\d+)/);
        
        for (const classroom of [...classes].sort()) {
            if (classroom === selectedClass) continue;
            
            setSelectedClass(classroom);
            
            await new Promise(resolve => setTimeout(resolve, 100));
            
            let elements = null;
            if (nameMatch) {
                const searchName = nameMatch[1];
                elements = document.querySelectorAll(`[id^="student-${searchName}"]`);
            } else if (idMatch) {
                const searchId = idMatch[1];
                elements = document.querySelectorAll(`[id$="-${searchId}"]`);
            }
            
            if (elements && elements.length > 0) {
                const element = elements[0];
                const cell = element.closest('td');
                if (cell) {
                    setTimeout(() => {
                        cell.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        });
                        
                        element.classList.add('scale-110');
                        setTimeout(() => {
                            element.classList.remove('scale-110');
                        }, 1000);
                    }, 100);
                    return; 
                }
            }
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        
        if (query) {
            setTimeout(async () => {
                sameClassSearch(query);
                
                const searchText = query.toUpperCase().trim();
                const currentElements = document.querySelectorAll(
                    `[id^="student-${searchText}"], [id$="-${searchText}"]`
                );
                
                if (!currentElements || currentElements.length === 0) {
                    await acrossClassSearch(query);
                }
            }, 100);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {seatingPlan && classes.length > 0 ? (
                <>
                    <Header
                        classes={classes}
                        selectedClass={selectedClass}
                        onClassChange={handleClassChange}
                        onSearch={handleSearch}
                    />

                    <div className="flex-grow overflow-auto relative">
                        <OutlineTable
                            seatingPlan={seatingPlan.classrooms[selectedClass]}
                            searchQuery={searchQuery}
                        />
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    <p className="text-white text-lg">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default SeatingPlan;
