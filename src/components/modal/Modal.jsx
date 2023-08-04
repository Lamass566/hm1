import { useState  } from 'react'
import './Modal.scss'

function Modal({header, closeButton, text, children, state, bg, bgHeader})
{
    const [bga, setBga] = useState(`form `+state)

    console.log(bga)
    let str =   `form `+state;
    console.log(str)

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    function handleSubmit2(){
        
    };
    
    return(
        <form className={str} onSubmit={handleSubmit} style={{backgroundColor: bg}}>
            <div className="header" style={{backgroundColor: bgHeader}}>
                {header}
                {
                    closeButton == "true" ? null : children[2]
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

export default Modal