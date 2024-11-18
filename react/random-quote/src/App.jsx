import { useState, useEffect, useRef } from "react";

const App = () => {
    const [quote, setQuote] = useState(""); // State for the quote
    const [author, setAuthor] = useState(""); // State for the author
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state
    const canvasRef = useRef(null); // Ref for the canvas

    // Function to fetch a random quote
    const GetQuote = async () => {
        setLoading(true); // Start loading
        setError(""); // Clear any previous errors

        const category = "happiness"; // Set the desired category
        const apiUrl = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
        const apiKey = "MNemEr9THSVTCxISru9Snw==VJeeHWGzXAbYm3tw"; // Replace with your API key

        try {
            const response = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "X-Api-Key": apiKey,
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch quote");
            }

            const data = await response.json();
            if (data.length > 0) {
                setQuote(data[0].quote); // Set the quote text
                setAuthor(data[0].author || "Unknown"); // Set the author or default to "Unknown"
            } else {
                setQuote("No quotes found for the selected category.");
                setAuthor("");
            }
        } catch (err) {
            setError(err.message);
            setQuote("");
            setAuthor("");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    // Function to draw the quote and author on the canvas
    const drawCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions
        const width = 800;
        const height = 400;
        canvas.width = width;
        canvas.height = height;

        // Draw a beautiful gradient background
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, "#FF7E79"); // Coral
        gradient.addColorStop(1, "#FFD29D"); // Soft Orange
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Add quote text
        ctx.fillStyle = "#FFFFFF"; // White text
        ctx.textAlign = "center";
        ctx.font = "24px Arial";
        ctx.fillText(quote, width / 2, height / 2 - 20);

        // Add author name
        if (author) {
            ctx.font = "20px Arial";
            ctx.fillText(`- ${author}`, width / 2, height / 2 + 30);
        }
    };

    // Re-draw the canvas whenever the quote or author changes
    useEffect(() => {
        if (quote) {
            drawCanvas();
        }
    }, [quote, author]);

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Random Quote Generator</h1>
            {/* Display loading, error, or canvas */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                <canvas
                    ref={canvasRef}
                    style={{ border: "1px solid #ccc", margin: "20px auto" }}
                ></canvas>
            )}
            <button
                onClick={GetQuote}
                style={{ padding: "10px 20px", fontSize: "16px" }}
            >
                Generate Quote
            </button>
        </div>
    );
};

export default App;
