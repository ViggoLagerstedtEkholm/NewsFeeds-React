import {HashRouter, Route, Routes} from 'react-router-dom';
import {useEffect, useMemo, useState} from "react";
import {ResetPassword} from "./Components/Authentication/ResetPassword";
import {Loading} from "./Components/Feed/Loading";
import {UserContext} from "./Components/Context/UserContext";
import jwt from 'jwt-decode';
import Profile from "./Components/Profile/Profile";
import Email from "./Components/Authentication/Email";
import Main from "./Components/Feed/Feed/Main";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import Navigation from "./Components/Navigation/TopNavigation";

function App() {
    const [user, setUser] = useState(null);
    const value = useMemo(() => ({user, setUser}), [user, setUser]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('accessToken')){
            const accessToken = localStorage.getItem('accessToken');
            const user = jwt(accessToken);
            setUser(user);
            setIsLoaded(true);
        }else{
            setUser(null);
            setIsLoaded(true);
        }
    }, []);

  return (
        <div>
        {isLoaded ?
            <UserContext.Provider value={value}>
                <HashRouter>
                <Navigation/>
                <div className="container text-white p-3">
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register redirectLogin={true}/>} />
                        <Route path="/profile" element={<Profile/>} />
                        <Route path="/add" element={<Register redirectLogin={false}/>} />
                        <Route path="/reset/password/:TOKEN" element={<ResetPassword/>} />
                        <Route path="/reset/password/mail" element={<Email/>} />
                    </Routes>
                </div>
                </HashRouter>
            </UserContext.Provider>
        : <Loading/>}
        </div>
  );
}

export default App;
