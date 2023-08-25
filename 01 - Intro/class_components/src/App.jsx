import React from "react";

// Import Component
import Com_1 from "./Components/Com_1";
import Com_2 from "./Components/Com_2";

class App extends React.Component {
    // 1. Properties
    // 2. Construct
    // 3. Methods
    render() {
        return (
            <div>
                <h1> Class Component with React </h1>
                <hr />
                <Com_1 />
                <Com_2 />
            </div>
        );
    }
}

export default App;
