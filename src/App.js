import {HashRouter, Route, Routes} from 'react-router-dom';
import {useEffect, useMemo, useState} from "react";
import {Loading} from "./Components/Feed/Loading";
import {UserContext} from "./Components/Context/UserContext";
import jwt from 'jwt-decode';
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
                    </Routes>
                </div>
                </HashRouter>
            </UserContext.Provider>
        : <Loading/>}
        </div>
  );
}

export default App;
