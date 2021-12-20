import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {LoginUser} from "../Services/UserService";
import Message from "../Alerts/Message";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();

    const login = (e) => {
        e.preventDefault();

        LoginUser(username, password).then(response => {
            localStorage.clear();
            localStorage.setItem('accessToken', JSON.stringify(response['accessToken']));
            localStorage.setItem('refreshToken', JSON.stringify(response['refreshToken']));
            setIsLoggedIn(true);
            window.location.reload();
        }).catch(error => {
            setMessage("Could not login.");
        });
    }

    if(loggedIn){
        navigate("/");
    }

    return (
        <form onSubmit={login}>
            <h1>Login</h1>
            {message ? <Message msg={message}/> : null}

            <div className="form-group mt-4">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="username"
                       className="form-control"
                       id="exampleInputUsername"
                       aria-describedby="usernameHelp"
                       placeholder="Username"
                       onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password"
                       className="form-control"
                       id="exampleInputPassword1"
                       placeholder="Password"
                       onChange={e => setPassword(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">Do not ever share your password.</small>
            </div>

            <button type="submit" className="btn btn-primary ">Submit</button>
        </form>
    );
}

export default Login;
