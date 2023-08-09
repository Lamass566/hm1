import { useEffect, useState } from 'react'
import Card from './components/card/Card';
import './components/card/Card.scss'
import Header from './components/header/Header';

import Modal from "./components/modal/Modal"
import Button from "./components/button/Button"


function App(){
    let trashVal = localStorage.getItem("trash")
    let favouriteVal = localStorage.getItem("favourite")

    const [data, setData] = useState([])
    const [trash, setTrash] = useState(trashVal)
    const [favourite2, setFavourite2] = useState(favouriteVal)

    let tempLS = localStorage.getItem("data").split(',')
    let parse = tempLS.map(string => parseInt(string));

    let tempLSFavourite = localStorage.getItem("arr").split(',')
    let parseFavourite = tempLSFavourite.map(string => parseInt(string));

    useEffect(()=>{
        
        fetch('api/data.json').then((res)=>res.json()).then((data)=>{
          setData(data.products);
         })

         setTrash(parse.length)
         setFavourite2(parseFavourite.length-1)
      })

    const [screen, setScreen] = useState("")
    const [secondModal, setSecondModal] = useState("hide")
    const [firstModal, setFirstModal] = useState("hide")
    const [val, setVal] = useState(true)
    const [index, setIndex] = useState("flex-card-0")


    function secondModalToggle(){
        if(firstModal === "show")
        {
            setFirstModal("hide");
            setIndex("flex-card-0")
            setVal(false)

        }
        else if(val === true)
        {
            setSecondModal("hide")
            setScreen("");
            setIndex("flex-card-0")
            setVal(false)
        }
        else if(val === false)
        {
            
            setSecondModal("show")
            setScreen("screen");
            setIndex("flex-card-2")
            setVal(true)
        }
        
    }

    const hideAllModals = () => {
        setFirstModal("hide");
        setSecondModal("hide");
        setScreen("");
        setIndex("flex-card-0")
     }
     
     
     function addToTrash()
     {
        hideAllModals()       
        
        if(!parse.includes(v))
        {
            let SumArr = [...parse, v]
            localStorage.setItem("data", SumArr)
        }
     }
     
     const [v, setV] = useState(0)
     const updateData = (value) => {
        setV(value);
     }
     
     const [favourite, setFavourite] = useState('show')
     function addToFavourite(){
        setFavourite('hide')
        hideAllModals()
     }

     let gg = localStorage.getItem("arr");

    return(
        <>
        <Header trash={trash} favourite={favourite2}/>

        <Modal closeButton="false" state={secondModal} bg="red" bgHeader="darkred" header="Modal" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." >
            <button style={{backgroundColor: "darkred"}} onClick={addToTrash}>Ok</button>
            <button style={{backgroundColor: "darkred"}} onClick={hideAllModals}>Cancel</button>
            <span className="closeX" onClick={hideAllModals}>X</span>
        </Modal>
        <div className={index}>
            {data.map(u => <Card fill={gg} id={u.id} clock={updateData} clickIz={addToFavourite}  name={u.name} price={u.price} url={u.url} click={secondModalToggle} key={u.id} /> )}
        </div>
        <div className={screen} onClick={hideAllModals}></div>
        </>
    )
}

export default App