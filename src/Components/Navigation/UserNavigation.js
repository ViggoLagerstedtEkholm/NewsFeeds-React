import {Link} from "react-router-dom";

function UserNavigation() {

    const onLogout = () =>{
        localStorage.clear();
        window.location.refresh();
    }

    return (
        <ul className="nav-links">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/add">Add new user</Link>
            </li>
            <li>
                <a href="/" onClick={onLogout}>Logout</a>
            </li>
        </ul>
    );
}

export default UserNavigation;
