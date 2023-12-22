import { useState } from "react";
const UseState = () => {
    // Objects
    const [state, setState] = useState({ name: "John", age: 30 });

    // Arrays
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const updateName = () => {
        return {
            ...state,
            name: "Pradip",
        };
    };

    const updateAge = () => {
        return {
            ...state,
            age: state.age + 1,
        };
    };

    // Add Item from array
    const addItem = () => {
        return setArray(...array, 6);
    };

    // Remove item from array

    return (
        <div className="container mx-auto m-5">
            {/* String */}
            <h1 className="text-4xl font-bold mb-4">useState hooks </h1>
            <hr />
            <h4 className="text-xl font-semibold my-4">Object</h4>
            <p>
                Name: {state.name}, Age : {state.age}
            </p>
            <button
                className="p-2 border m-2"
                onClick={() => setState(updateName)}
            >
                Update Name
            </button>
            <button
                className="p-2 border m-2"
                onClick={() => setState(updateAge)}
            >
                Update Age
            </button>

            {/* Array */}
            <h4 className="text-xl font-semibold my-4"> Array</h4>
            <ul className="mb-2">
                {array.map((arr, i) => {
                    return <li key={i}> {arr} </li>;
                })}
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 m-2 rounded">
                Add Arr
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 m-2 rounded">
                Remove Arr
            </button>
        </div>
    );
};

export default UseState;
