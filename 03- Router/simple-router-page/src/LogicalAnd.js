import React from "react";

const LogicalAnd = (props) => {
    const cars = props.cars;
    console.log(cars);
    const isCar = true;
    return (
        <div>
            <h2>Garage</h2>
            {cars.length > 0 && (
                <p> You have {cars.length} cars in your garage.</p>
            )}

            {isCar ? "have a car" : "not have a car"}
        </div>
    );
};

export default LogicalAnd;
