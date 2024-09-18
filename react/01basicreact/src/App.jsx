import React from "react";

const Child = (props) => {
    return <div> This is the child props are : {props.name}</div>;
};

const App = () => {
    return (
        <div>
            <h1>Basic React </h1>
            <Child name="Pradip Chaudhary" />
        </div>
    );
};

export default App;
