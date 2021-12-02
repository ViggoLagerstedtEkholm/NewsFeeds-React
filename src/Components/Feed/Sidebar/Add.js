import React, {useState} from "react";

function Add() {
    const [RSS, setRSS] = useState();

    const upload = (e) =>{
        e.preventDefault();

        alert(RSS);
    }

    return (
        <div id="sidebar-bg" className="rounded-1 p-2">
            <h1>Feeds</h1>
            <form onSubmit={upload}>
                <div className="form-group my-2">
                    <label htmlFor="RSS">Password</label>
                    <input type="text"
                           className="form-control"
                           id="RSS"
                           placeholder="RSS"
                           onChange={e => setRSS(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">Only valid URLs</small>
                </div>

                <button type="submit" className="btn btn-primary ">Submit</button>
            </form>
        </div>
    );
}

export default Add;