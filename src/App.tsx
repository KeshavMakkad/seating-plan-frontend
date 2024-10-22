import "./App.css";
import { ShowSeating } from "./components/class";

function App() {
    return (
        <>
            <h1>React App</h1>
            <p>React app with TypeScript</p>
            <ShowSeating cols={5} rows={12} colsPerEachRow={[3, 5, 5, 3, 3]} />
        </>
    );
}

export default App;
