import React from "react";
import Plug from "../images/plug.png";
import S1 from "../images/s1.png";
import S2 from "../images/s2.png";
import S3 from "../images/s3.png";
import S4 from "../images/s4.png";
import S5 from "../images/s5.png";
const OurService = () => {
    return (
        <section class="service_section layout_padding">
            <div class="container">
                <div class="heading_container">
                    <h2>Our Services</h2>
                    <img src={Plug} alt="" />
                </div>

                <div class="service_container">
                    <div class="box">
                        <div class="img-box">
                            <img src={S1} class="img1" alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>Equipment installation</h5>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available,
                            </p>
                        </div>
                    </div>
                    <div class="box active">
                        <div class="img-box">
                            <img src={S2} class="img1" alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>Windmill Energy</h5>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available,
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="img-box">
                            <img src={S3} class="img1" alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>Equipment Maintenance</h5>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available,
                            </p>
                        </div>
                    </div>
                    <div class="box ">
                        <div class="img-box">
                            <img src={S4} class="img1" alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>Offshore Engineering</h5>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available,
                            </p>
                        </div>
                    </div>
                    <div class="box">
                        <div class="img-box">
                            <img src={S5} class="img1" alt="" />
                        </div>
                        <div class="detail-box">
                            <h5>Electrical Wiring</h5>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available,
                            </p>
                        </div>
                    </div>
                </div>
                <div class="btn-box">
                    <a href="">Read More</a>
                </div>
            </div>
        </section>
    );
};

export default OurService;
