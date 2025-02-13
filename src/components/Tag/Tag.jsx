import PropTypes from 'prop-types'

function Tag({ tag }) {
    return <button>{tag}</button>
}

Tag.propTypes = {
    tag: PropTypes.string,
}

export default Tag
