import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeatingPlanPage from "./pages/SeatingPlanPage";
import { ThemeProvider } from "./utils/ThemesContext";
import PageNotFound from "./pages/404-PageNotFound";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/seatingplan/:name/" element={<SeatingPlanPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
export default App;
