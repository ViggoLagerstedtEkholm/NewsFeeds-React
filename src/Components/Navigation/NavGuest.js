import {Link} from "react-router-dom";

function NavGuest(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <Link className="navbar-brand text-white" to="/">Navbar</Link>

            <ul className="navbar-nav text-white">
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link text-white" to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavGuest;