import { useState } from 'react'
import './Button.scss'
import PropTypes from 'prop-types'

function Button({text, bg, onClick}){
    return(
        <>
        <button className='mainButton' style={{backgroundColor: bg}} onClick={onClick}>{text}</button>        
        </>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    bg: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button