function Item(props) {
    const {content, enclosure, guid, isoDate, link, pubDate, title} = props.data;
    const {url} = enclosure || {};

    return(
        <div className="item-bg rounded-1 p-2 text-break my-3">
            {url ? <img className="card-img" alt="NO URL FOUND" src={url} width="100%" height="100%"/> : null}

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
}

export default Item;