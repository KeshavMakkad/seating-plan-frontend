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
                    <p className="text-white text-lg">Loading...</p>
                </div>
            )}
        </div>
    );
};

export default SeatingPlan;
