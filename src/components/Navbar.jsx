import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <nav className="navbar">
            <h1>#VANLIFE</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}
