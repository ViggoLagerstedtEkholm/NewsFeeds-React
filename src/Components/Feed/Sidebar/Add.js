import React, {useState} from "react";
import {SaveRSS} from "../../Services/FeedsService";

function Add() {
    const [RSS, setRSS] = useState();
    const [limit, setLimit] = useState();

    const upload = (e) =>{
        e.preventDefault();

        const RSSPayload = new FormData();
        RSSPayload.append("URL", RSS);
        RSSPayload.append("displayLimit", limit);

        SaveRSS(RSSPayload).then(() => window.location.reload()).catch(error => {
           console.log(error);
        });
    }

    return (
        <div id="sidebar-bg" className="rounded-1 p-2">
            <h1>Feeds</h1>
            <form onSubmit={upload}>
                <div className="form-group my-2">
                    <div className="row">
                        <div className="col-9">
                            <label>RSS</label>
                            <input type="text"
                                   className="form-control"
                                   id="RSS"
                                   placeholder="RSS"
                                   value={RSS}
                                   onChange={e => setRSS(e.target.value)}/>
                        </div>
                        <div className="col">
                            <label>Amount</label>
                            <input type="number"
                                   className="form-control"
                                   id="Number"
                                   placeholder="N"
                                   value={limit}
                                   onChange={e => setLimit(e.target.value)}/>
                        </div>
                    </div>

                    <small id="emailHelp" className="form-text text-muted">Only valid URLs</small>
                </div>

                <button type="submit" className="btn btn-primary ">Submit</button>
            </form>
        </div>
    );
}

export default Add;