import '../Layout.scss'
function Favourite(props) {
    return ( 
        <div className="favourite">
            {props.children}
        </div>
     );
}

export default Favourite;