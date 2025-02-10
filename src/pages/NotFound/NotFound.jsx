import { Link } from 'react-router-dom'
import './notFound.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function NotFound() {
    return (
        <div>
            <Header />
            <div className="notFound">
                <h1 className="notFound_title">404</h1>
                <p className="notFound_content">
                    Oups! La page que vous demandez n'existe pas.
                </p>
                <Link className="notFound_return" to="/">
                    Retourner à la page d'accueil
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound
