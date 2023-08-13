import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import Home from "./Pages/Home";
import About from "./Pages/About";

const Header = () => {
    return (
        <header className="header_section">
            <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="Logo" />
                        <span>Electrochip</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="s-1"> </span>
                        <span className="s-2"> </span>
                        <span className="s-3"> </span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">
                                        Home{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        {" "}
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/service">
                                        {" "}
                                        Service{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">
                                        {" "}
                                        Blog{" "}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        Contact{" "}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
