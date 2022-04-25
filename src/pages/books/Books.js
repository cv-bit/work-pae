import React from 'react'
import { Link } from 'react-router-dom'
import './books.css'

const Books = ({fontColor, color, setFontColor, setColor}) => {
  return (
    <div className="books-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", padding: "15px 5px", color: fontColor, backgroundColor: color, marginTop: "0"}}>Books</h1>
        <Link to="/samplereader" style={{color: fontColor, backgroundColor: color, padding: "15px", borderRadius: "10px", margin: "auto"}}>go to sample reader</Link>
    </div>
  )
}

export default Books