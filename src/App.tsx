import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatingPlanPage from "./pages/SeatingPlanPage";
import { ThemeProvider } from "./styles/ThemesContext";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seatingplan/:name/" element={<SeatingPlanPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
