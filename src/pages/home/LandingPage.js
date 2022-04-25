import React, {useEffect} from 'react'
import Modal from '../../components/modals/Modal'
 
import './landingpage.css'

const LandingPage = ({color, fontColor, setColor, setFontColor, bgColor, setBgColor}) => {

    const changeColor = (value) => {
        setColor(value)
        setFontColor("white")
        localStorage.setItem('color', value)
        localStorage.setItem('fontColor', 'white')
        if(value === "#fff44f" || value === "#ccccff") {
            setFontColor("black")
            localStorage.setItem('fontColor', 'black')
        }
    }

    const changeBgColor = (value) => {
        setBgColor(value)
        localStorage.setItem('bgColor', value)
    }

    useEffect(() => {
        console.log(localStorage)
    })

  return (
    <div className="landingpage-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", padding: "15px 5px", color: fontColor, backgroundColor: color, marginTop: "0"}}>Practical American English</h1>
        <h1 style={{width: "100%", textAlign: "center"}}>set primary color</h1>
        <Modal onClick={() => changeColor("#48d1cc")} style={{backgroundColor: "#48d1cc"}}/>
        <Modal onClick={() => changeColor("#32cd32")} style={{backgroundColor: "#32cd32"}}/>
        <Modal onClick={() => changeColor("#fff44f")} style={{backgroundColor: "#fff44f"}}/>
        <Modal onClick={() => changeColor("#9bddff")} style={{backgroundColor: "#9bddff"}}/>
        <Modal onClick={() => changeColor("#ee82ee")} style={{backgroundColor: "#ee82ee"}}/>
        <Modal onClick={() => changeColor("#00bfff")} style={{backgroundColor: "#00bfff"}}/>
        <Modal onClick={() => changeColor("#ccccff")} style={{backgroundColor: "#ccccff"}}/>
        <Modal onClick={() => changeColor("#ff4500")} style={{backgroundColor: "#ff4500"}}/>
        <Modal onClick={() => changeColor("#9884fc")} style={{backgroundColor: "#9884fc"}}/>
        <input type="color" style={{width: "150px", height: "150px", margin: "15px"}}/>
        <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            <h1 style={{width: "100%", textAlign: "center"}}>set bg color</h1>
            <div style={{display: "flex"}}>
                <Modal onClick={() => changeBgColor("#2a2a2a")} style={{backgroundColor: "#2a2a2a"}}/>
                <Modal onClick={() => changeBgColor("#e5e4e2")} style={{backgroundColor: "#e5e4e2"}}/>
            </div>
        </div>
    </div>
  )
}

export default LandingPage