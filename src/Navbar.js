import { Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar">
            <h1>THE REACT BLOG</h1>
            <div className="links">
                <Link to="/" className="">Home</Link>
                <Link to="/create" className="newblog">New Blog</Link>
            </div>
        </nav>
    );
}

export default Navbar;