import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container p-2">
                <h1 className="text-4xl border-solid border-b-orange-300 text-green-400">
                    Tailwind CSS
                </h1>
            </div>
        </>
    );
}

export default App;
