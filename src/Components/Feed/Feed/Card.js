function Card(props) {
    const {
        copyright,
        description,
        feedUrl,
        generator,
        items,
        lastBuildDate,
        link,
        title
    } = props.data;

    const {index} = props;

    const renderItems = () =>{
        return items.map((data, index) => {
            const {content, enclosure, guid, isoDate, link, pubDate, title} = data;
            const {url} = enclosure;

            return(
                <div key={index} className="item-bg rounded-1 p-2 text-break my-3">
                    <img className="card-img" alt="URL" src={url} width="100%" height="100%"/>

                    <h4>{title}</h4>
                    <p>{content}</p>

                    <small><a href={link}>{link}</a></small>
                    <br/>
                    <small><b>ISO: {guid}</b></small>
                    <br/>
                    <small><b>ISO: {isoDate}</b></small>
                    <br/>
                    <small><b>{pubDate}</b></small>
                </div>
            )
        })
    }

    return (
        <div className={ index === 0 ? "card-bg p-2 rounded-1 text-break" : "card-bg p-2 my-2 rounded-1 text-break"}>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>{feedUrl}</p>
            <p>{generator}</p>
            <p>{link}</p>

            <hr/>

            <p>{renderItems()}</p>

            <small>{lastBuildDate}</small>
            <small>{copyright}</small>
        </div>
    );
}

export default Card;