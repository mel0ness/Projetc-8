import "../../Style/Components/Footer/Footer.scss"
import BlackLogo from "../../Assets/Black_logo.svg"

const Footer = () => {
    return (
        <footer>
            <img src={BlackLogo} alt="logo kasa" />
            <div>© 2020 Kasa. All rights reserved</div>
        </footer>
    )
}

export default Footer