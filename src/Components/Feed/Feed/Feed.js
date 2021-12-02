import Card from "./Card";
import {useEffect, useState} from "react";

let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

function Feed() {
    const [feeds, setFeeds] = useState( []);
    useEffect(async () =>{
        const url = CORS_PROXY + 'https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/';
        const feed = await parser.parseURL(url);
        setFeeds(oldArray => [...oldArray, feed]);
    }, [])

    return (
        <div>
            {
                feeds.map((data, index) => {
                    return(
                        <Card data={data} index={index}/>
                    );
                })
            }
        </div>
    );
}

export default Feed;