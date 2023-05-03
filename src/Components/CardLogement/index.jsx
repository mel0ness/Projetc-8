import "../../Style/Components/CardLogement/CardLogement.scss"
import { Link } from "react-router-dom"


const Card = ({id, cover, title}) => {
return (
    <Link to={`/logement/${id}`}>
    <div className="testComp" key={id} id={id}>
        <img src={cover} alt={title} />
        <div className="testTitle">{title}</div>
    </div></Link>
)
}

export default Card