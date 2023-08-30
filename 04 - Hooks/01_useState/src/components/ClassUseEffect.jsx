// javascript
import React from "react";

class ClassUseEffect extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleIncrement = () => {
        this.setState((prevState) => {
            return { count: prevState.count - 1 };
        });
    };

    handleDecrement = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 };
        });
    };

    render() {
        return (
            <div className="ClassComponent">
                <h2> Class Component </h2>
                <hr />
                <br />
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>

                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default ClassUseEffect;
