import {useEffect, useState} from "react";
import {GetAllRSS, RemoveRSS} from "../../Services/FeedsService";

function Badges() {
    const [feeds, setFeeds] = useState([]);

    useEffect(() =>{
        GetAllRSS().then(response => {
            setFeeds(response);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    const test = (id) =>{
        RemoveRSS(id).then(() => window.location.reload()).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="overflow-auto">
            {
                feeds.map((data, index) => {
                    const {displayLimit, url, id} = data;

                    return(
                        <div className="my-1 mx-2 my-3 bg-primary bg-opacity-25 p-3 rounded-3" key={index}>
                            <div className="row">
                                <div className="text-white col-8">
                                    <a href={url} className="text-white URL-display">
                                        {url}
                                    </a>
                                </div>
                                <div className="col">
                                    Display limit {displayLimit}
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col">
                                    <button type="button" className="btn btn-danger" onClick={() => test(id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Badges;