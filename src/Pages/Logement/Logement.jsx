import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "../../Style/Pages/Error/Error.scss"

const Logement = (Logements) => {

const arrayLogements = Logements.Logements;
const { idLogement } = useParams();
const idList = arrayLogements.reduce((acc, Logements) => 
    acc.includes(Logements.id) ? acc : acc.concat(Logements.id), []
)
const securityID = idList.find((id) => id === idLogement);
const idActual = arrayLogements.filter((d) => d.id === idLogement)
console.log(idActual);

    return (
securityID ? ( 
        <div>Prout</div>
    ) :  (<div>
    <div className="BlockError">
        <div className="BlockError--FourOFour">404</div>
        <div className="BlockError--explain">Oups! La page que vous demandez n'existe pas.</div>
    </div>
    <Link to="/" className="LinkError">Retourner sur la page d’accueil</Link>
    </div>) )
}

export default Logement