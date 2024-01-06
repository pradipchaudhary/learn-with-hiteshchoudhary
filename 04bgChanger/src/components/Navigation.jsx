import React, { useState } from "react";
import COLORS from "../colors.js";

const Navigation = () => {
    const [bgColor, setBgColor] = useState("lighter");
    const colors = Object.values(COLORS);
    // colors.length = 10;
    // console.log(typeof colors);
    // console.log(colors.length);
    return (
        <div
            className="w-screen h-screen flex justify-center items-end overflow-x-scroll py-5"
            style={{ backgroundColor: bgColor }}
        >
            {colors.map((color, index) => {
                // console.log(color.length);
                return (
                    <button
                        key={index}
                        className=" h-10 w-10 rounded-full m-1 "
                        style={{
                            backgroundColor: color,
                        }}
                        onClick={() => setBgColor(color)}
                    >
                        {}
                    </button>
                    
                );
            })}
        </div>
    );
};

export default Navigation;
