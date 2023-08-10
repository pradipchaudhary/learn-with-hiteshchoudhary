import React, { useState, useEffect } from "react";

const Testimonial = () => {
    // 1. Variables
    const endpoint = "http://localhost:1337/api/testimonials";
    const [data, setData] = useState([]);

    // 2. Functions
    const fetchTestimonials = () => {
        return fetch(endpoint)
            .then((response) => response.json())
            .then((testimonialsData) => {
                setData(testimonialsData.data);
            });
    };
    useEffect(() => {
        fetchTestimonials();
    }, []);
    // 3. Return statements
    return data.map((testimonial, index) => {
        console.log(testimonial);
        return (
            <div className="testimonial" key={index}>
                <img className="img" src="" alt="" />
                <p className="message"> {testimonial.attributes.Message}</p>
                <h4 className="name">{testimonial.attributes.Name}</h4>
            </div>
        );
    });
};

export default Testimonial;
