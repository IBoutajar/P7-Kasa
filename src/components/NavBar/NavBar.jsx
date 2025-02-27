import './navbar.scss'
import { Link } from 'react-router-dom'

function NavBar() {
    const currentRoute = window.location.pathname

    return (
        <nav className="nav">
            <ul className="nav_list">
                <li
                    className={
                        currentRoute === '/'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/">Accueil</Link>
                </li>
                <li
                    className={
                        currentRoute === '/about'
                            ? 'nav_list_item_active'
                            : 'nav_list_item'
                    }
                >
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
