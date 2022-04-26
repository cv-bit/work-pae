import React, {useEffect} from 'react'
import { useLocation } from 'react-router'

const ReaderControls = ({color, fontColor, setColor, setFontColor, bgColor, setBgColor}) => {

    const location = useLocation()

    useEffect(() => {
        if(location.state && location.state.fontColor) {
        setFontColor(location.state.fontColor)
        }
        if(location.state && location.state.color) {
        setColor(location.state.color)
        }
        if(location.state && location.state.bgColor) {
        setBgColor(location.state.bgColor)
        }
    }, [color])

    const readerControlsContainer = {
        backgroundColor: bgColor,
        position: "fixed",
        bottom: "0",
        width: "100vw",
        height: "75px",
        color: fontColor,
        display: "flex",
        justifyContent: "space-around"
    }

    const controlsContainer = {
        backgroundColor: bgColor,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px"
    }

    const controlerBtn = {
        backgroundColor: color,
        color: fontColor,
        padding: "15px",
        border: "none",
        borderRadius: "5px",
        fontSize: "1.2rem"
    }

    const btnHover = (e) => {
        if(e.type === "mouseenter") {
            e.target.style.transform = 'scale(1.05)'
        } else if (e.type === 'mouseleave') {
            e.target.style.transform = 'scale(1)'
        }
    }

  return (
    <div style={readerControlsContainer}>
        <div style={controlsContainer}>
            <button onMouseEnter={(e) => btnHover(e)} onMouseLeave={(e) => btnHover(e)} style={controlerBtn}>previous page</button>
        </div>
        <div style={controlsContainer}>
            <button onMouseEnter={(e) => btnHover(e)} onMouseLeave={(e) => btnHover(e)} style={controlerBtn}>next page</button>
        </div>
    </div>
  )
}

export default ReaderControls