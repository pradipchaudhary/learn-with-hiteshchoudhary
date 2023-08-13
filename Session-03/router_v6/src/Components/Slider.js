import React from "react";

import Slider1 from "../images/slider-img.jpg";

const Slider = () => {
    return (
        <section className="slider_section ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="detail_box">
                            <h1>
                                Electrical <br />
                                Service <br />
                                Providers
                            </h1>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem
                            </p>
                            <a href="/contact" className="">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 offset-lg-1">
                        <div className="img_content">
                            <div className="img_container">
                                <div
                                    id="carouselExampleControls"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="img-box">
                                                <img src={Slider1} alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src={Slider1} alt="" />
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="img-box">
                                                <img src={Slider1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="prev"
                            >
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleControls"
                                role="button"
                                data-slide="next"
                            >
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;
