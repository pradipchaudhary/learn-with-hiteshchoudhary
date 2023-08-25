import React from "react";
import Layout from "../Layout";
import Slider from "../Slider";
import AboutUs from "../AboutUs";
import OurService from "../OurService";
import Contact from "../Contact";
import Blog from "../Blog";

const Home = () => {
    return (
        <React.Fragment>
            <Layout>
                <Slider />
                <OurService />
                <AboutUs />
                <Blog />
                <Contact />
            </Layout>
        </React.Fragment>
    );
};

export default Home;
