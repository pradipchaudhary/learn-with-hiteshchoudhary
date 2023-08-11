import React, { useState } from "react";

const Forms = () => {
    const [fname, setFname] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello!, your name is ${fname}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2> React Form </h2>
                <label for="name">Name</label>
                <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Forms;
