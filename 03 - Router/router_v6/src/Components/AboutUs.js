import React from "react";
import Image1 from "../images/about-img1.jpg";
import Image2 from "../images/about-img2.jpg";

const AboutUs = () => {
    return (
        <section class="about_section layout_padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="detail-box">
                            <div class="heading_container">
                                <h2>About Us</h2>
                                <img src="images/plug.png" alt="" />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit
                            </p>
                            <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="img_container">
                            <div class="img-box b1">
                                <img src={Image1} alt="" />
                            </div>
                            <div class="img-box b2">
                                <img src={Image2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
