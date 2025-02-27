import greyStar from '../../assets/grey_star.png'
import redStar from '../../assets/red_star.png'
import PropTypes from 'prop-types'

function Rating({ rating }) {
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1
                return (
                    <img
                        key={index}
                        src={ratingValue <= rating ? redStar : greyStar}
                        alt="star"
                    />
                )
            })}
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.string,
}

export default Rating
