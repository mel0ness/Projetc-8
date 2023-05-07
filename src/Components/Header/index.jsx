import '../../Style/Components/Header/Header.scss'
import { Link } from "react-router-dom"
import Logo from '../../Assets/Logo.svg'
import { useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation().pathname;

return (

    <nav>
        <Link to="/"><img src={Logo} alt="logo"/></Link>
        <div>
        { location === "/" ? (<Link className='pathname' to="/">Accueil</Link>) : (<Link to="/">Accueil</Link>) }
        { location === "/propos" ? (<Link className='pathname' to="/propos">A Propos</Link>) : (<Link to="/propos">A Propos</Link>) }
    

        </div>
    </nav>
)
}

export default Header


