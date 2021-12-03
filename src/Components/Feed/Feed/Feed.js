import Card from "./Card";
import {useEffect, useState} from "react";
import {Loading} from "../Loading";

let Parser = require('rss-parser');
let parser = new Parser();

const RSS = "https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/";

function Feed() {
    const [feeds, setFeeds] = useState( []);
    const [loaded, setLoaded] = useState( false);

    useEffect(() => {
        fetchRSS(RSS).then(response =>{
           setFeeds(prev => [...prev, response]);
           setLoaded(true);
        }).catch(error =>{
            console.log(error);
        });
    }, [])

    const fetchRSS = async (RSS) => {
        return await parser.parseURL(RSS);
    }

    const renderItems = () =>{
        return feeds.map((data, index) => {
            return(
                <Card key={index} data={data} index={index}/>
            );
        })
    }

    return (
        <div>
            {
               loaded ? renderItems() : <Loading/>
            }
        </div>
    );
}

export default Feed;