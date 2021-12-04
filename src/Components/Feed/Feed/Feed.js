import Card from "./Card";
import {useEffect, useState} from "react";
import {Loading} from "../Loading";

let Parser = require('rss-parser');
let parser = new Parser();

function Feed() {
    const [feeds, setFeeds] = useState( []);
    const [loaded, setLoaded] = useState( false);

    useEffect(() => {
        fetchRSS(["https://rss.aftonbladet.se/rss2/small/pages/sections/senastenytt/", "https://www.dn.se/rss/"]).then(response =>{
           setFeeds(response);
           setLoaded(true);
        }).catch(error =>{
            console.log(error);
        });
    }, [])

    const fetchRSS = async (RSS) => {
        let data = [];
        for(let i = 0 ; i < RSS.length; i++){
            data.push(await parser.parseURL(RSS[i]));
        }
        console.log(data);

        return data;
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