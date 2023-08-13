import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Service from "./Components/Pages/Service";
import Blog from "./Components/Pages/Blog";
import Contact from "./Components/Pages/Contact";
import Page404 from "./Components/Pages/Page404";

function App() {
    console.log(Router);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </Router>
    );
}

export default App;
