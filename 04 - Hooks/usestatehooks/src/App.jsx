import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    function increaseCount() {
        return setCount(count + 1);
    }
    function decreaseCount() {
        if (count !== 0) return setCount(count - 1);
    }
    return (
        <>
            <div>
                <h1>Count : {count}</h1>
                <button type="button" onClick={increaseCount}>
                    INCREASE{" "}
                </button>
                <button type="button" onClick={decreaseCount}>
                    DECREASE
                </button>
            </div>
        </>
    );
}

export default App;
