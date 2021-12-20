import {Link} from "react-router-dom";

function NavUser(){
    const onLogout = () =>{
        localStorage.clear();
        window.location.refresh();
    }

    return(
        <nav className="navbar navbar-expand-lg bg-dark p-3">
            <Link className="navbar-brand text-white" to="/">Navbar</Link>

            <ul className="navbar-nav text-white">
                <li className="nav-item">
                    <a className="nav-link text-white" href="/" onClick={onLogout}>Logout</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavUser;