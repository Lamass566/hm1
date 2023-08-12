import { useEffect, useState } from 'react'
import Card from './components/card/Card';
import './components/card/Card.scss'
import Header from './components/header/Header';

import Modal from "./components/modal/Modal"
// eslint-disable-next-line no-unused-vars
import Button from "./components/button/Button"
import { Route, Routes } from 'react-router';


function App(){

    if((localStorage.getItem("data")===null)&&(localStorage.getItem("arr")===null))
    {
        localStorage.setItem("data", 0)
        localStorage.setItem("arr", 0)     
    }
    //localStorage data
    let trashVal = localStorage.getItem("trash")
    let favouriteVal = localStorage.getItem("favourite")
    Number(trashVal++);
    Number(favouriteVal++);

    //useState variables
    const [data, setData] = useState([])
    const [trash, setTrash] = useState(trashVal)
    const [favourite2, setFavourite2] = useState(favouriteVal)
    const [screen, setScreen] = useState("")
    const [secondModal, setSecondModal] = useState("hide")
    // eslint-disable-next-line no-unused-vars
    const [firstModal, setFirstModal] = useState("hide")
    const [val, setVal] = useState(true)
    const [index, setIndex] = useState("flex-card-0")

    //parse data from localStorage
    let tempLS = localStorage.getItem("data").split(',')
    let parse = tempLS.map(string => parseInt(string));

    let tempLSFavourite = localStorage.getItem("arr").split(',')
    let parseFavourite = tempLSFavourite.map(string => parseInt(string));

    useEffect(()=>{
        
        fetch('api/data.json').then((res)=>res.json()).then((data)=>{
          setData(data.products);
         })

         setTrash(parse.length-1)
         setFavourite2(parseFavourite.length-1)
      },[parse, parseFavourite])

      

    function secondModalToggle(){

        let firstModalValue = 'hide';
        let secondModalValue = 'hide';
        let indexValue = 'flex-card-0';
        let screenValue = "";
        let value = false;

        if(val === false)
        {
            secondModalValue = "show";
            screenValue = "screen";
            indexValue = "flex-card-2";
            value = true;
        }
        
        setFirstModal(firstModalValue);
        setSecondModal(secondModalValue);
        setIndex(indexValue);
        setVal(value);
        setScreen(screenValue);
    }

    const hideAllModals = () => {
        setFirstModal("hide");
        setSecondModal("hide");
        setScreen("");
        setIndex("flex-card-0")
     }
     
     const [v, setV] = useState(0)
     //add product to cart
     function addToTrash()
     {
        hideAllModals()       
        
        if(!parse.includes(v))
        {
            let SumArr = [...parse, v]
            localStorage.setItem("data", SumArr)
        }
     }

     //remove product from cart
     function removeFromTrash()
     {
        hideAllModals()       
        
            let d = parse.filter((n) => {return n !== v});
            let SumArr = [...d]
            localStorage.setItem("data", SumArr)
     }
     const [route, setRoute] = useState("none")
     const [route2, setRoute2] = useState("block")
     //get id from Card component
     
     const updateData = (value, route) => {
        setV(value);
        console.log(route)
        
        if(route === "cart")
        {
            setRoute("block")
            setRoute2("none")
        }
        else{
            setRoute("none")
            setRoute2("block")
        }
     }
     
     ////add product to favourite
     // eslint-disable-next-line no-unused-vars
     const [favourite, setFavourite] = useState('show')
     function addToFavourite(){
        setFavourite('hide')
        hideAllModals()
     }

     let fill = localStorage.getItem("arr");
     let cartData = localStorage.getItem("data");
     // eslint-disable-next-line no-unused-vars
     let cartdataObj ={
        id: 0,
        name: "",
        price:0,
        url:""
     }

    return(
        <>
        <Header trash={trash} favourite={favourite2}/>

        <Modal closeButton="false" state={secondModal} bg="red" bgHeader="darkred" header="Modal" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." >
            <button style={{backgroundColor: "darkred", display: route2}} onClick={addToTrash}>Ok</button>
            <button style={{backgroundColor: "darkred", display: route}} onClick={removeFromTrash}>Ok</button>
            <button style={{backgroundColor: "darkred"}} onClick={hideAllModals}>Cancel</button>
            <span className="closeX" onClick={hideAllModals}>X</span>
        </Modal>

        
        <div className={index}>
        <Routes>
            <Route path="/" element={data.map(u => <Card removeComponent={false} data={cartData} route="home" fill={fill} obj={cartdataObj={id:u.id, name:u.name, price:u.price,url:u.url}} clock={updateData} clickIz={addToFavourite} click={secondModalToggle} key={u.id} /> )}/>
            <Route path="/cart" element={data.map(u => <Card removeComponent={true} data={cartData} route="cart" fill={fill} obj={cartdataObj={id:u.id, name:u.name, price:u.price,url:u.url}} clock={updateData} clickIz={addToFavourite} click={secondModalToggle} key={u.id} /> )}/>
            <Route path="/favourite" element={data.map(u => <Card removeComponent={true} data={cartData} route="favourite" fill={fill} obj={cartdataObj={id:u.id, name:u.name, price:u.price,url:u.url}} clock={updateData} clickIz={addToFavourite} click={secondModalToggle} key={u.id} /> )}/>
        </Routes>
        </div>
        

        <div className={screen} onClick={hideAllModals}></div>
        </> 
    )
}

export default App