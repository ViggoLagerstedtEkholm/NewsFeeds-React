import Sidebar from "../Sidebar/Sidebar";
import Feed from "./Feed";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import {Link} from "react-router-dom";

function Main() {
    const {user} = useContext(UserContext);

    if(user === null){
        return <div>
            You need to register and login to browse feeds, <Link to="/login">Login</Link> or <Link to="/register">Register</Link>
        </div>
    }

    return (
        <div>
            <div className="row">
                <div className="card bg-info bg-opacity-25 p-4">
                    <h4>Welcome, {user.sub}</h4>
                </div>
            </div>

            <div className="row my-3">
                <div className="col-4">
                    <Sidebar/>
                </div>
                <div className="col-8 border-start border-secondary">
                    <Feed/>
                </div>
            </div>
        </div>
    );
}

export default Main;