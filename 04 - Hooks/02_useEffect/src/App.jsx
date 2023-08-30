import "./App.css";
import BasicEffect from "./components/BasicEffect";
import Card from "./components/Card";

function App() {
    return (
        <>
            <h1 className="bg-green-600 p-2 text-black">Tailwind CSS</h1>
            <br />
            <Card />
            <div className="bg-yellow-600 py-2 mt-4">
                <h4 className="h4 text-4xl">Footer</h4>
            </div>

            <BasicEffect />
        </>
    );
}

export default App;
