import Sidebar from "../Sidebar/Sidebar";
import Feed from "./Feed";

function Main() {
    return (
        <div className="row">
            <div className="col-4">
                <Sidebar/>
            </div>

            <div className="col-8 border-start border-secondary">
                <Feed/>
            </div>
        </div>
    );
}

export default Main;