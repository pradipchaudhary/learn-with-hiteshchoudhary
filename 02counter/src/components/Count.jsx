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
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white">{count}</h1>
                <button
                    className="bg-green-700  text-white font-bold py-3 px-7 mt-8 rounded uppercase"
                    type="button"
                    onClick={increaseCounter}
                >
                    Increase{" "}
                </button>
            </div>
        </>
    );
};

export default Count;
