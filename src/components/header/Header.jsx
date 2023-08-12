import { Router } from 'react-router-dom';
import './Header.scss'
import Star from '../svg/svgStar/Star';
import Basket from '../svg/svgBasket/Basket';
import {Link} from "react-router-dom"


function Header({trash, favourite}){

    return(
        <div className="header">
            <div className='flex'>
                <div className="icons-container">
                    <span>
                        <Basket/>
                        <p className='p'>{trash}</p>
                    </span>
                    <span>
                        <Star/>
                        <p className='p'>{favourite}</p>
                    </span>
                </div>

                <div className="router-link-flex">
                    <Link className='routerLink' to="/">Home</Link>
                    <Link className='routerLink' to="/cart">Cart</Link>
                    <Link className='routerLink' to="/favourite">Favourite</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;