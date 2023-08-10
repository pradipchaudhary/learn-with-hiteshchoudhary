// Import
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";

const BlogPosts = {
    "first-blog-post": {
        title: "First Blog Post",
        description: "Lorem ipsum dolor sit amet, consectetur adip.",
    },
    "second-blog-post": {
        title: "Second Blog Post",
        description: "Hello React Router v6",
    },
};

function Home() {
    return (
        <div>
            <h1>Home Page </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1> About Page </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </div>
    );
}

function Blog() {
    return (
        <div>
            <h1> Blog Page </h1>
            <Outlet />
        </div>
    );
}

function BlogLists() {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <h3>{title}</h3>
                </li>
            ))}
        </ul>
    );
}

function NoMatch() {
    return (
        <div>
            <h1> 404 Not Found </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/blog"> Blog </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />}>
                        <Route index element={<BlogLists />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
