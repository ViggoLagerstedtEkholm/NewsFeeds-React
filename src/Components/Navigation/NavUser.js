import {Link} from "react-router-dom";

function NavUser(){
    const onLogout = () =>{
        localStorage.clear();
        window.location.refresh();
    }

    return(
        <div className="top-nav">
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <a href="/" onClick={onLogout}>Logout</a>
                </li>
            </ul>
            <Link className="logo" to="/"><b>News</b></Link>
        </div>
    );
}

export default NavUser;