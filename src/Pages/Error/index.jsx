import { Link } from "react-router-dom"
import "../../Style/Pages/Error/Error.scss"

const Error = () => {
    return (
        <div>
        <div className="BlockError">
            <div className="BlockError--FourOFour">404</div>
            <div className="BlockError--explain">Oups! La page que vous demandez n'existe pas.</div>
        </div>
        <Link to="/" className="LinkError">Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error