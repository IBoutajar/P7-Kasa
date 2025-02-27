import Logo from '../../assets/logo_footer.png'
import './footer.scss'

function Footer() {
    return (
        <div className="footer">
            <img src={Logo} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
