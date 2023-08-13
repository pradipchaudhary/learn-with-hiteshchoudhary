import React from "react";
import Plug from "../images/plug.png";

const Contact = () => {
    return (
        <section className="contact_section layout_padding">
            <div className="container ">
                <div className="heading_container">
                    <h2>Contact Us</h2>
                    <img src={Plug} alt="" />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="message-box"
                                    placeholder="Message"
                                />
                            </div>
                            <div className="d-flex ">
                                <button>SEND</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                            <div className="map-responsive">
                                <iframe
                                    title="google map"
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                    width="600"
                                    height="300"
                                    frameborder="0"
                                    style={{
                                        border: "0",
                                        width: "100%",
                                        height: "100%",
                                        allowfullscreen: "true",
                                    }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
