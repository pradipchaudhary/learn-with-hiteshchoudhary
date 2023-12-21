import { useState } from "react";
const UseState = () => {
    // Hooks
    const [name, setName] = useState("Pradip");
    //     const [myArr, setMyArr] = useState([2, 4, 6, 8]);

    return (
        <div>
            {/* String */}
            <h1>Hold String</h1>
            <hr />
            <div>
                <p>{name}</p>
            </div>
        </div>
    );
};

export default UseState;
