import React, {useState} from 'react';
import Message from "../Alerts/Message";
import {SendPasswordEmail} from "../Services/UserService";

const Email = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const SendLinkToEmail = (e) =>{
        e.preventDefault();
        SendPasswordEmail(email).then(() =>{
            alert('Sent!');
        }).catch(() =>{
            setMessage('Could not send email to user.');
        });
    }

    return (
        <div className="container">
            <div className="title-bar">
                <h1>Enter email to receive the password reset link.</h1>

                {message ? <Message msg={message}/> : null}

                <form onSubmit={SendLinkToEmail}>
                    <div className="text_field">
                        <label>Email</label>
                        <input type="email"
                               id="email"
                               placeholder="Email"
                               value={email}
                               onChange={(e) => {
                                   setEmail(e.target.value);
                               }}
                        />
                    </div>

                    <button className="button-style-4" type="submit">Send link to email</button>
                </form>

            </div>
        </div>
    );
}

export default Email;
