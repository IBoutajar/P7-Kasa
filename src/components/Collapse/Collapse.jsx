import './collapse.scss'
import arrow from '../../assets/arrow.png'
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
                    content.map((item, index) => {
                        return <p key={index}>{item}</p>
                    })
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </>
    )
}

export default Collapse
