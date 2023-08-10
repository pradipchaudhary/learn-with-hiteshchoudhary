import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RouterV6 from "./RouterV6";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        {/* <App /> */}
        <RouterV6 />
    </React.StrictMode>
);
