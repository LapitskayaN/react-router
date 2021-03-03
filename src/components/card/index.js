
const Card = ({name, climate, population, diameter, onClick}) => {
    return (
        <div className="card" id={name}>
            <h1>{name}</h1>
            <p>climate :{climate}</p>
            <p> diameter : {diameter}</p>
            <p> population : {population} </p>
            {/* <img src={posterUrl} alt={name} /> */}
            <button name={name} onClick={(e) => onClick(e)}>
                Know more..
                </button>

        </div>

    )
}

export default Card;