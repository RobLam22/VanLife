import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>#VANLIFE</h1>
            <li>
                <Link to="/">Home</Link>
                <Link to="/host">Host</Link>
                <Link to="/income">Income</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </li>
        </nav>
    );
}
