import React, { useEffect, useState } from "react";

const FunctionalUseEffect = () => {
    const [count, setCount] = useState(0);
    function increaseCount() {
        return setCount(count + 1);
    }
    function decreaseCount() {
        if (count !== 0) return setCount(count - 1);
    }

    useEffect(() => {
        // console.log("Render Use Effect. ");
        console.log("Count Change !", count);
    }, [count]);
    return (
        <div className="FunctionalComponent">
            <h2>Functional Component </h2>
            <hr />
            <br />
            <button type="button" onClick={increaseCount}>
                INCREASE{" "}
            </button>
            <button type="button" onClick={decreaseCount}>
                DECREASE
            </button>
            <br />
            <h2>{count}</h2>
        </div>
    );
};

export default FunctionalUseEffect;
