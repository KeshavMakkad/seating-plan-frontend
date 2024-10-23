import "./App.css";
import { ShowSeating } from "./components/class";
import { GroupUpload } from "./components/group-upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ShowSeating
                                cols={5}
                                rows={12}
                                colsPerEachRow={[3, 5, 5, 3, 3]}
                            />
                        }
                    />
                    <Route path="/group-upload" element={<GroupUpload />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
