import React, {useState} from "react";
import {ChangePassword} from "../Services/UserService";

export const PasswordForm = () =>{
    const [currentPass, setCurrentPass] = useState();
    const [newPass, setNewPass] = useState();
    const [updated, setUpdated] = useState(false);

    const changePassword = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("currentPass", currentPass);
        formData.append("newPass", newPass);

        ChangePassword(formData).then(response => {
            console.log(response);
            setUpdated(true);
        }).catch(() => {
            alert('Could not update password');
        });
    }

    return(
        <div className="title-bar">
            <h1>Change password</h1>

            {updated ?
                <div className="information">
                    <h4 className="success">Updated</h4>
                </div> : null
            }

            <hr/>

            <form onSubmit={changePassword}>
                <div className="text_field">
                    <label>Current Password</label>
                    <input type="text"
                           id="currentPass"
                           placeholder="Current Password"
                           value={currentPass}
                           onChange={(e) => {
                               setCurrentPass(e.target.value);
                           }}
                    />
                </div>

                <div className="text_field">
                    <label>New Password</label>
                    <input type="password"
                           id="password"
                           placeholder="New Password"
                           value={newPass}
                           onChange={(e) => {
                               setNewPass(e.target.value);
                           }}
                    />
                </div>

                <button className="button-style-1" type="submit">Change password</button>
            </form>
        </div>
    );
}