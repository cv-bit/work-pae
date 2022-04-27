import React, {useEffect} from 'react'
import { useLocation } from 'react-router'

const ReaderControls = ({color, fontColor, setColor, setFontColor, bgColor, setBgColor, setChangePage, changePage, numPages}) => {

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
        color: fontColor,
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        zIndex: "50"
    }

    const controlsContainer = {
        backgroundColor: bgColor,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const controlerBtn = {
        backgroundColor: color,
        color: fontColor,
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        fontSize: "1rem"
    }

    const btnHover = (e) => {
        if(e.type === "mouseenter") {
            e.target.style.transform = 'scale(1.05)'
        } else if (e.type === 'mouseleave') {
            e.target.style.transform = 'scale(1)'
        }
    }

    const nextPage = () => {
        if (changePage < numPages.length -1) {
            setChangePage(changePage+1)
        } else {
            setChangePage(numPages.length -1)
        }
    } 

    const prevPage = () => {
        if(changePage > 0) {
            setChangePage(changePage - 1)
        } else {
            setChangePage(0)
        }
    }

  return (
    <div style={readerControlsContainer}>
        <div style={controlsContainer}>
            <button onMouseEnter={(e) => btnHover(e)} onMouseLeave={(e) => btnHover(e)} style={controlerBtn} onClick={prevPage}>previous</button>
        </div>
        <div style={controlsContainer}>
            <button onMouseEnter={(e) => btnHover(e)} onMouseLeave={(e) => btnHover(e)} style={controlerBtn} onClick={nextPage}>next</button>
        </div>
    </div>
  )
}

export default ReaderControls