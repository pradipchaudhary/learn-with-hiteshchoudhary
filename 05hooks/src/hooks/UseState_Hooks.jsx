import { useState } from "react";

const UseState_Hooks = () => {
    const [count, setCount] = useState(0);

    const [person, setPerson] = useState({
        firstName: "John",
        lastName: "Smith",
        age: 20,
    });

    const increaseHandler = () => {
        setCount((pre) => pre + 4);
        setCount((pre) => pre + 1);
    };

    const updatePersonhandler = () => {
        setPerson((prevState) => {
            return { ...prevState, age: 30 };
        });
    };
    return (
        <div>
            <h2>UseState_Hooks</h2>
            <h1>{count}</h1>
            <button onClick={increaseHandler}>Increase </button>

            <br />
            <h4>Person Detail</h4>
            <p>
                Hi my name is {person.firstName} {person.lastName}, and age is :{" "}
                {person.age}{" "}
            </p>
            <button onClick={updatePersonhandler}>Update Person Detail</button>
        </div>
    );
};

export default UseState_Hooks;
