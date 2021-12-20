import Card from "./Card";
import {useEffect, useState} from "react";
import {Loading} from "../Loading";
import {GetAllRSS} from "../../Services/FeedsService";

let Parser = require('rss-parser');
let parser = new Parser();

function Feed() {
    const [feeds, setFeeds] = useState( []);
    const [loaded, setLoaded] = useState( false);

    useEffect(async () => {
        async function fetchData()
        {
             return await GetAllRSS();
        }
        const feedConfig = await fetchData();

        fetchRSS(feedConfig).then(response => {
            setFeeds(response);
            setLoaded(true);
        }).catch(error => {
            console.log(error);
        });
    }, [])

    const fetchRSS = async (RSS) => {
        let data = [];
        for(let i = 0 ; i < RSS.length; i++){
            const {displayLimit, id, url} = RSS[i];
            data.push({data : await parser.parseURL(url), limit : displayLimit, id: id});
        }
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