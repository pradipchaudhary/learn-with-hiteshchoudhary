import React, { useState } from "react";

const Count = () => {
    // const count = 0;
    const [count, setCount] = useState(10);
    const increaseCounter = () => {
        console.log("increase conuter " + count);
        setCount(count + 1);
    };
    return (
        <>
            <div className="count">
                <h2>Count </h2>
                <h1>{count}</h1>
                <button type="button" onClick={increaseCounter}>
                    Increase{" "}
                </button>
            </div>
        </>
    );
};

export default Count;
