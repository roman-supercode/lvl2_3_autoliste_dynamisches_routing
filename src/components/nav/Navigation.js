import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="nav">
            <h1>Super Carlist 🏎️</h1>
            <ul>
                <Link to="/home">Home</Link>
            </ul>
        </nav>
    );
};

export default Navigation;