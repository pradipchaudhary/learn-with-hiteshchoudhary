import React from "react";

const AllStudents = () => {
    const studentEndpoint = "http://localhost:1337/api/students";
    function GetAllStudents() {
        fetch(studentEndpoint).then((res) =>
            res.json().then((data) => {
                console.log(data.data);
                const allStudents = data.data;
                return allStudents;
            })
        );
    }

    GetAllStudents();

    return <div>AllStudents{}</div>;
};

export default AllStudents;
