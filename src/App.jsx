import Modal from "./components/modal/Modal"
import Button from "./components/button/Button"
import { useState } from 'react'

function App(){

    const [screen, setScreen] = useState("")
    const [secondModal, setSecondModal] = useState("hide")
    const [firstModal, setFirstModal] = useState("hide")
    const [val, setVal] = useState(true)


    const secondModalToggle = () => {
        if(firstModal == "show")
        {
            setFirstModal("hide");

        }
       if(val == true)
       {
        setVal(false)
        setSecondModal("hide")
        setScreen("");
       }
       else
       {
        setVal(true)
        setSecondModal("show")
        setScreen("screen");
       }
    }
    
    const firstModalToggle = () => {
        if(secondModal == "show")
        {
            setSecondModal("hide");

        }
        if(val == true)
        {
         setVal(false)
         setFirstModal("show")
         setScreen("screen");

        }
        else
        {
         setVal(true)
         setFirstModal("hide")
         setScreen("");

        }
     }

    const hideAllModals = () => {
        setFirstModal("hide");
        setSecondModal("hide");
        setScreen("");
     }

    return(
        <>
        <Button state={firstModal} text="Open first modal" bg="green" onClick={firstModalToggle}></Button>
        <Button state={secondModal} text="Open second modal" bg="red" onClick={secondModalToggle}></Button>

        <Modal closeButton="true" state={secondModal} bg="red" bgHeader="darkred" header="First Modal" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." >
            <button style={{backgroundColor: "darkred"}} onClick={hideAllModals}>Ok</button>
            <button style={{backgroundColor: "darkred"}} onClick={hideAllModals}>Cancel</button>
            <span className="closeX" onClick={hideAllModals}>X</span>
        </Modal>
        
        <Modal closeButton="false" state={firstModal} bg="green" bgHeader="darkgreen" header="Second Modal" text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text." >
            <button style={{backgroundColor: "darkgreen"}} onClick={hideAllModals}>Ok</button>
            <button style={{backgroundColor: "darkgreen"}} onClick={hideAllModals}>Cancel</button>
            <span className="closeX" onClick={hideAllModals}>X</span>
        </Modal>
        <div className={screen} onClick={hideAllModals}></div>
        </>
    )
}

export default App