// Import
import Home from "./Components/Home";
import Testimonial from "./Components/Testimonial";
function App() {
    return (
        <div className="App">
            <h1> Lord Buddhan College .</h1>
            <Home />
            <section id="testimonial">
                <h1 className="title"> Testimonial </h1>
                <div className="content">
                    <Testimonial />
                </div>
            </section>
        </div>
    );
}

export default App;
