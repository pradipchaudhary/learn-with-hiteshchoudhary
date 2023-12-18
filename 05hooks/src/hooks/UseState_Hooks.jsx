import React, { useState } from "react";

const UseState_Hooks = () => {
    const [count, setCount] = useState(0);

    const increaseHandler = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h2>UseState_Hooks</h2>
            <h1>{count}</h1>
            <br />
            <button onClick={increaseHandler}>Increase </button>
        </div>
    );
};

export default UseState_Hooks;
