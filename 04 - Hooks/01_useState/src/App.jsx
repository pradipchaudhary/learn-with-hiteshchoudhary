import "./App.css";
import ClassUseEffect from "./components/ClassUseEffect";
import FunctionalUseEffect from "./components/FunctionalUseEffect";

function App() {
    return (
        <>
            <div className="useEffect">
                <ClassUseEffect />
                <FunctionalUseEffect />
            </div>
        </>
    );
}

export default App;
