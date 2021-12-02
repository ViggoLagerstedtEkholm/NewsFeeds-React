function Card(props) {
    const {} = props.data;
    const {index} = props;

    console.log(props);

    return (
        <div className={ index === 0 ? "card-bg p-2 rounded-1" : "card-bg p-2 my-2 rounded-1"}>
            <h1>{}</h1>
            <p>{}</p>
            <p>{}</p>
        </div>
    );
}

export default Card;