import { useEffect, useState } from "react";
import get_seating from "./context/get_seating";
import OutlineTable from "./components/Outline";
import Header from "./components/Header";
import "./App.css";

function App() {
    const [seatingPlan, setSeatingPlan] = useState<any>(null);
    const [classes, setClasses] = useState<string[]>([]);
    const [selectedClass, setSelectedClass] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await get_seating();
            setSeatingPlan(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (seatingPlan && seatingPlan.classrooms) {
            const classroomNames = Object.keys(seatingPlan.classrooms);
            if (classroomNames.length > 0) {
                setClasses(classroomNames);
                setSelectedClass((prev) => prev || classroomNames[0]); // Set default only if it's empty
            }
        }
    }, [seatingPlan]);

    const handleClassChange = (cls: string) => {
        setSelectedClass(cls);
    };
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="flex flex-col h-screen">
            {seatingPlan && classes.length > 0 ? (
                <>
                    <Header
                        classes={classes}
                        selectedClass={selectedClass}
                        onClassChange={handleClassChange}
                        onSearch={setSearchQuery}
                    />

                    <div className="flex-grow overflow-auto">
                        <OutlineTable
                            seatingPlan={seatingPlan.classrooms[selectedClass]}
                            searchQuery={searchQuery}
                        />
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    Loading...
                </div>
            )}
        </div>
    );
}

export default App;
