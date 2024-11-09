import { useState } from "react";
import { colors } from "./colors";

const App = () => {
    const [bgColor, setBgColor] = useState(
        `linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)`
    );

    return (
        <div
            className={`w-full h-screen overflow-hidden flex justify-center items-center`}
            style={{ background: `${bgColor}, fixed` }}
        >
            <div className="fixed bottom-10 flex space-x-2 p-4 px-10 bg-slate-200 rounded-[25px]">
                {colors.map((color, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setBgColor(color);
                        }}
                        className="w-8 h-8 border rounded-full border-none"
                        style={{ background: `${color}, fixed` }}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default App;
