import './Header.scss'
import Star from '../svg/svgStar/Star';
import Basket from '../svg/svgBasket/Basket';

function Header({trash, favourite}){

    return(
        <div className="header">
            <div className='flex'>
            <span>
                <Basket/>
                <p className='p'>{trash}</p>
            </span>
            <span>
                <Star/>
                <p className='p'>{favourite}</p>
            </span>
            </div>
        </div>
    )
}

export default Header;