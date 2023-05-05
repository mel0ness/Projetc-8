import starFull from "../../Assets/StarFull.svg"
import starEmpty from "../../Assets/StarEmpty.svg"
import "../../Style/Components/Star/Star.scss"

const Star = ({state}) => {
console.log(state);
    return (
        state > 0 ? (
            <img src={starFull} alt="Etoile" className="Star" />
        ) : <img src={starEmpty} alt="Etoile vide" className="Star"/>
    )
}

export default Star