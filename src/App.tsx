import "./App.css";
import { ShowSeating } from "./components/class";
import { GroupUpload } from "./components/group-upload";

function App() {
    return (
        <>
            <h1>React App</h1>
            <p>React app with TypeScript</p>
            <ShowSeating cols={5} rows={12} colsPerEachRow={[3, 5, 5, 3, 3]} />
            <GroupUpload />
        </>
    );
}

export default App;
