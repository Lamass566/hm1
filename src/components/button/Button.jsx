import { useState } from 'react'
import './Button.scss'

function Button({text, bg, onClick}){
    return(
        <>
        <button className='mainButton' style={{backgroundColor: bg}} onClick={onClick}>{text}</button>        
        </>
    )
}

export default Button