import { useEffect, useState } from 'react'
import Card from './components/card/Card';
import './components/card/Card.scss'
import Header from './components/header/Header';

import Modal from "./components/modal/Modal"
import Button from "./components/button/Button"


function App(){
    let trashVal = localStorage.getItem("trash")
    let favouriteVal = localStorage.getItem("favourite")
    Number(trashVal++);
    Number(favouriteVal++);

    const [data, setData] = useState([])
    const [trash, setTrash] = useState(trashVal)
    const [favourite2, setFavourite2] = useState(favouriteVal)


    useEffect(()=>{
        
        fetch('api/data.json').then((res)=>res.json()).then((data)=>{
          setData(data.products);
         })
      },[])

    const [screen, setScreen] = useState("")
    const [secondModal, setSecondModal] = useState("hide")
    const [firstModal, setFirstModal] = useState("hide")
    const [val, setVal] = useState(true)
    const [index, setIndex] = useState("flex-card-0")


    const secondModalToggle = () => {
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
     
     const addToTrash = () =>{
        hideAllModals()
        setTrash(Number(trash) + 1)
        localStorage.setItem("trash", trash)
        console.log(trash,"local")
     }
     
     const [favourite, setFavourite] = useState('show')
     const addToFavourite = (event) =>{
        console.log(event)
        setFavourite('hide')
        hideAllModals()
        setFavourite2(Number(favourite2) + 1)
        localStorage.setItem("favourite", favourite2)

     }

     console.log(index)
     console.log(localStorage.getItem("arr"))
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
            {data.map(u => <Card fill={gg} id={u.id} clickIz={addToFavourite} name={u.name} price={u.price} url={u.url} click={secondModalToggle} key={u.id} /> )}
        </div>
        <div className={screen} onClick={hideAllModals}></div>
        </>
    )
}

export default App