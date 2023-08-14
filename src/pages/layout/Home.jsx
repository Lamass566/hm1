import '../Layout.scss'

function Home(props) {
    return ( 
        <div className="home">
            {props.children}
        </div>
     );
}

export default Home;