import { useEffect } from "react";
import get_seating from "./context/get_seating"; // Removed `.ts`
import "./App.css";

function App() {

  let seating_plan = undefined;

  useEffect(() => {
    seating_plan = get_seating();
  }, []);

  return <></>;
}

export default App;
