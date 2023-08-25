import React, { useState } from "react";
import Garage from "./Garage";
import Forms from "./Forms";
// import LogicalAnd from "./LogicalAnd";

function App() {
    const [name, setName] = useState("Pradip Chaudhary");
    return (
        <div>
            <h3> useState </h3>
            <p> Name : {name}</p>
            <input
                type="text"
                name="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
            <hr />
            <Garage />
            <br />
            <Forms />
        </div>
    );
}

export default App;
