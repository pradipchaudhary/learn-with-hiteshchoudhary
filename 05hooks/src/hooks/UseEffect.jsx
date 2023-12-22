import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [count, setCount] = useState(0);
    console.log("Start of useEffect: ", count);
    useEffect(() => {
        setTimeout(() => setCount(count + 1), 5000);
        console.log("Inside of useEffect: ", count);
    }, []);
    console.log("End of useEffect: ", count);
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <h1 className=" text-5xl font-semibold"> {count}</h1>
            <br />
            {/* <p>Name is : </p> */}
        </div>
    );
};

export default UseEffect;
