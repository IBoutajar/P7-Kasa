import './header.scss'
import Logo from '../../assets/logo.png'
import NavBar from '../NavBar/NavBar'

function Header() {
    return (
        <div className="header_Wrapper">
            <h1>
                <img src={Logo} alt="Kasa, location d'appartements" />
            </h1>
            <NavBar />
        </div>
    )
}

export default Header
