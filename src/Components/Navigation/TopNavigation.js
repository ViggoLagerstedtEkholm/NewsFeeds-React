import {useContext} from "react";
import {UserContext} from "../Context/UserContext";
import NavUser from "./NavUser";
import NavGuest from "./NavGuest";

function Navigation() {
    const {user} = useContext(UserContext);
    if (user) {
        return (
            <NavUser/>
        );
    }else{
        return (
            <NavGuest/>
        );
    }
}

export default Navigation;