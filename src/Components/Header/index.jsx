import '../../Style/Components/Header/Header.scss'
import { Link } from "react-router-dom"
import Logo from '../../Assets/Logo.svg'

const Header = () => {
return (
    <nav>
        <img src={Logo} alt="logo"/>
        <div>
            <Link to="/">Accueil</Link>
            <Link to="/propos">A Propos</Link>
        </div>
    </nav>
)
}

export default Header


