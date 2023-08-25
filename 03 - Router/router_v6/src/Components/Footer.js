import React from "react";

// Images imports from image folder
import LocationWhite from "../images/location-white.png";
import TelephoneWhite from "../images/telephone-white.png";
import EnvelopeWhite from "../images/envelope-white.png";
import Facebook from "../images/fb.png";
import Twitter from "../images/twitter.png";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/instagram.png";

// envelope-white
// fb
// twitter
// linkedin
// instagram
const Footer = () => {
    return (
        <React.Fragment>
            <section className="info_section layout_padding">
                <div className="container">
                    <div className="info_contact">
                        <div className="row">
                            <div className="col-md-4">
                                <a href="">
                                    <img src={LocationWhite} alt="" />
                                    <span>
                                        Passages of Lorem Ipsum available
                                    </span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="">
                                    <img src={TelephoneWhite} alt="" />
                                    <span>Call : +012334567890</span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="">
                                    <img src={EnvelopeWhite} alt="" />
                                    <span>demo@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-lg-9">
                            <div className="info_form">
                                <form action="">
                                    <input
                                        type="text"
                                        placeholder="Enter your email"
                                    />
                                    <button>subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="info_social">
                                <div>
                                    <a href="">
                                        <img src={Facebook} alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src={Twitter} alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src={Linkedin} alt="" />
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src={Instagram} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="container-fluid footer_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-9 mx-auto">
                            <p>
                                &copy; 2019 All Rights Reserved By
                                <a href="https://html.design/">
                                    Free Html Templates
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
