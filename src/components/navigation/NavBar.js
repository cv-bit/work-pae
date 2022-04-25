import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import './navbar.css'

const NavBar = ({color, setColor,fontColor, setFontColor, bgColor,setBgColor}) => {

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
        <Link className="nav-btn" style={{ backgroundColor: color, color: fontColor, borderRadius: "75px" }} to="/">PAE</Link>
        <Link className="nav-btn" style={bgColor === "#e5e4e2" ? {color : "black"} : {color: "white"}} to="/books">Books</Link>
      </div>
      <div className='nav-right'>
        <Link className="nav-btn" style={{ backgroundColor: color, color: fontColor, borderRadius: "10px" }} to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default NavBar