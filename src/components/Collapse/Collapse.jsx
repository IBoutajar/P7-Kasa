import './collapse.scss'
import arrow from '../../assets/arrow.png'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="collapse">
                <h3 onClick={() => setToggle(!toggle)}>
                    <p>{title}</p>
                    <img
                        className={
                            toggle ? 'arrow arrow_up' : 'arrow arrow_down'
                        }
                        src={arrow}
                        alt="show content"
                    />
                </h3>
            </div>
            <div
                className={
                    toggle ? 'collapse_content' : 'collapse_content_hidden'
                }
            >
                {Array.isArray(content) ? (
                    // <ul> a placé
                    content.map((item, index) => {
                        return <p key={index}>{item}</p> // changer en <li>
                    })
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </>
    )
}

Collapse.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
}

export default Collapse
