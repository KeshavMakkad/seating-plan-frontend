import { useEffect, useState } from "react";
import get_seating from "./context/get_seating";
import OutlineTable from "./components/Outline";
import "./App.css";

function App() {
    const [seating_plan, setSeatingPlan] = useState<any>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const data = await get_seating();
            setSeatingPlan(data);
        };
        fetchData();
    }, []);

    return (
        <>
            {seating_plan ? (
                <OutlineTable
                    seating_plan={seating_plan.classrooms["Class A"]}
                />
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default App;
