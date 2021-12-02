import Add from "./Add";
import Badges from "./Badges";

function Sidebar() {
    return (
        <div id="sidebar-bg" className="rounded-1 p-2">
            <Add/>
            <hr/>
            <Badges/>
        </div>
    );
}

export default Sidebar;