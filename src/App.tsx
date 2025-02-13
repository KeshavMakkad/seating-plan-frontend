import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatingPlanPage from "./pages/SeatingPlanPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/seatingplan/:name/" element={<SeatingPlanPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
