import { useState  } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'

function Modal({header, closeButton, text, children, state, bg, bgHeader})
{
    let str =   `form `+state;

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    return(
        <form className={str} onSubmit={handleSubmit} style={{backgroundColor: bg}}>
            <div className="header" style={{backgroundColor: bgHeader}}>
                {header}
                {
                    closeButton === "true" ? null : children[2]
                }
            </div>
            <div className="body">
                <p className="body_text">{text}</p>
                <div className='buttons'>
                  {children}  
                </div>

            </div>
           
        </form>
    )
}

Modal.propTypes = {
    text: PropTypes.string,
    header: PropTypes.string,
    closeButton: PropTypes.string,
    state: PropTypes.string,
    bg: PropTypes.string,
    bgHeader: PropTypes.string
}



export default Modal