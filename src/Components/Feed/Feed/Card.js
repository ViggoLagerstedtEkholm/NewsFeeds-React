import Item from "./Item";

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
           return <Item key={index} data={data}/>
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

            <small>{lastBuildDate?? ""}</small>
            <small>{copyright ?? ""}</small>
        </div>
    );
}

export default Card;