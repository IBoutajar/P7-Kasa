import './card.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Card({ id, cover, title }) {
    return (
        <Link to={`/accomodation/${id}`} className="gallery-card">
            <img src={cover} alt={'Kasa' + title} />
            <h3>{title}</h3>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.string,
    cover: PropTypes.string,
    title: PropTypes.string,
}

export default Card
