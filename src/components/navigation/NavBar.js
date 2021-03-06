import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import './navbar.css'

const NavBar = ({color, setColor,fontColor, setFontColor, bgColor, setBgColor}) => {

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
  }, [])

  return (
    <div className="navbar-container" style={{ backgroundColor: bgColor }}>
      <div style={{display: "flex"}}>
        <Link className="nav-btn" style={{ backgroundColor: color, color: fontColor, borderRadius: "5px", margin: "0", display: "flex", alignItems: "center", height: "45px" }} to="/">PAE</Link>
        <Link className="nav-btn" style={bgColor === "#e5e4e2" ? {color : "black"} : {color: "white"}} to="/books">Books</Link>
      </div>
      {location.pathname.includes('samplereader') ? <h3 style={{color: bgColor === "#e5e4e2" ? "#000" : "#fff", margin: "0"}}>Welcome to the Demo Reader</h3> : ""}
      <div className='nav-right' style={{display: "flex"}}>
        <Link className="nav-btn" style={{ backgroundColor: color, color: fontColor, borderRadius: "5px", margin: "0", display: "flex", alignItems: "center", height: "45px" }} to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default NavBar