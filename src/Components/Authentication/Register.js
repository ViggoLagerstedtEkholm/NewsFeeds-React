import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {RegisterUser} from "../Services/UserService";
import Message from "../Alerts/Message";
import {Loading} from "../Feed/Loading";

function Register({redirectLogin}) {
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [passwordRepeat, setPasswordRepeat] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const registerPayload = new FormData();
        registerPayload.append("firstname", firstname);
        registerPayload.append("lastname", lastname);
        registerPayload.append("username", username);
        registerPayload.append("password", password);
        registerPayload.append("email", email);

        RegisterUser(registerPayload).then(() => {
            alert('Registered account.');
            if(redirectLogin){
                navigate("/login");
            }else{
                navigate("/");
            }
        }).catch(error => {
            setMessage("Could not register user! The username or email is probably taken.");
            alert(error);
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={register}>
            <h1>Register</h1>
            {message ? <Message msg={message}/> : null}

            <div className="form-group mt-4">
                <label htmlFor="username">Username</label>
                <input type="text"
                       className="form-control"
                       id="ema"
                       aria-describedby="usernameHelp"
                       placeholder="Username"
                       value={username}
                       onChange={e => setUsername(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       placeholder="Email"
                       value={email}
                       onChange={e => setEmail(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="firstname">Firstname</label>
                <input type="text"
                       className="form-control"
                       id="firstname"
                       placeholder="Firstname"
                       value={firstname}
                       onChange={e => setFirstname(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="lastname">Lastname</label>
                <input type="text"
                       className="form-control"
                       id="lastname"
                       placeholder="Lastname"
                       value={lastname}
                       onChange={e => setLastname(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="lastname">Password</label>
                <input type="password"
                       className="form-control"
                       id="password"
                       placeholder="Password"
                       value={password}
                       onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className="form-group my-4">
                <label htmlFor="passwordRepeat">Password Repeat</label>
                <input type="password"
                       className="form-control"
                       id="passwordRepeat"
                       placeholder="Password Repeat"
                       value={passwordRepeat}
                       onChange={e => setPasswordRepeat(e.target.value)}/>
            </div>

            {!isLoading ? <button type="submit" className="btn btn-primary ">Submit</button> : <Loading/>}
        </form>
    );
}

export default Register;
