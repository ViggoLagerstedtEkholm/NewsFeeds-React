import {useNavigate, useParams} from "react-router-dom";
import Message from "../Alerts/Message";
import React, {useEffect, useState} from "react";
import {PasswordReset, ValidatePassword} from "../Services/UserService";

export const ResetPassword = () => {
    const [newPass, setNewPass] = useState();
    const [newPassRepeat, setNewPassRepeat] = useState();
    const [message, setMessage] = useState();
    const { TOKEN } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        ValidatePassword(TOKEN).catch(() =>{
            navigate('/login');
        });
    }, [])


    const ResetPassword = (e) =>{
        e.preventDefault();
        if(newPass === newPassRepeat){
            const resetPassword = new FormData();
            resetPassword.append("token", TOKEN);
            resetPassword.append("password", newPass);

            PasswordReset(resetPassword).then(() =>{
                navigate('/login');
            }).catch(() =>{
                setMessage('Could not update password.');
            });
        }else{
            alert('Password does not match.');
        }
    }

    return (
        <div className="container">
            <div className="title-bar">
                <h1>Reset password</h1>
                {message ? <Message msg={message}/> : null}

                <form onSubmit={ResetPassword}>

                    <div className="text_field">
                        <label>Password</label>
                        <input id="name" type="text" className="user-input-text" placeholder="Password"
                               value={newPass}
                               onChange={(e) => {
                                   setNewPass(e.target.value);
                               }}/>
                    </div>

                    <div className="text_field">
                        <label>Password repeat</label>
                        <input id="username" type="text" className="user-input-text" placeholder="Password repeat"
                               value={newPassRepeat}
                               onChange={(e) => {
                                   setNewPassRepeat(e.target.value);
                               }}/>
                    </div>

                    <input type="submit" name="submit_register" className="button-style-4" value="Change password"/>

                </form>
            </div>
        </div>
    );
}