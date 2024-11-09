import { useState } from "react";

const Count = () => {
    // const count = 0;
    const [count, setCount] = useState(0);
    const increaseCounter = () => {
        setCount(count + 1);
    };

    const increaseByTwo = () => {
        setCount((prvCount) => prvCount + 1);
        setCount((prvCount) => prvCount + 1);
    };

    const reset = () => {
        setCount(0);
    };
    return (
        <>
            <div className="text-center">
                <h1 className="text-6xl font-bold text-black mb-7">{count}</h1>
                <div className="flex gap-10">
                    <button
                        className="bg-green-800  text-white font-bold py-3 px-7 mt-8 rounded uppercase"
                        type="button"
                        onClick={increaseCounter}
                    >
                        Increase{" "}
                    </button>
                    <button
                        className="bg-purple-800  text-white font-bold py-3 px-7 mt-8 rounded uppercase"
                        onClick={increaseByTwo}
                    >
                        Increase By Two{" "}
                    </button>

                    <button
                        className="bg-slate-800  text-white font-bold py-3 px-7 mt-8 rounded uppercase"
                        onClick={reset}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default Count;
