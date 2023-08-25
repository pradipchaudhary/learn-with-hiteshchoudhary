// Import
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams,
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

function Posts() {
    return (
        <div>
            <h1> Blog Page </h1>
            <Outlet />
        </div>
    );
}

function PostLists() {
    return (
        <ul>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/blog/${slug}`}>
                        <h3>{title}</h3>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

// Sing Blog Post
function Post() {
    const { slug } = useParams();
    const post = BlogPosts[slug];
    if (!post) {
        return <span>The blog post you've requested doesn't exist.</span>;
    }
    const { title, description } = post;
    return (
        <div style={{ padding: 20 }}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
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
    console.log(useParams());
    console.log("hello");
    return (
        <Router>
            <div className="App">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/posts"> Posts </Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />}>
                        <Route index element={<PostLists />} />
                        <Route path=":slug" element={<Post />} />
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
