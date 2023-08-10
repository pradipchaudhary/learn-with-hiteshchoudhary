// Import
import React, { useState } from "react";

function IncreaseSalary() {
    const [salary, setSalary] = useState(20000);
    console.log(salary);
    return (
        <div className="salary">
            <h3>Salary : {salary} </h3>
            <button
                onClick={() => {
                    setSalary(salary + 10000);
                }}
            >
                Increase Salary
            </button>
        </div>
    );
}

export default IncreaseSalary;
