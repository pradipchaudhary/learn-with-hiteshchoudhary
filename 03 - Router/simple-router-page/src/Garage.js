import React from "react";
import Car from "./Car";

const Garage = () => {
    const cars = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" },
    ];
    console.log(cars);
    return (
        <div>
            <hr />
            <h1> Who live in my Garage ?</h1>
            <ul>
                {cars.map((car) => (
                    <Car key={car.id} brand={car.brand} />
                ))}
            </ul>
        </div>
    );
};

export default Garage;
