import React from 'react'

import './form.css'

const Form = () => {
    let email 
    let password

    const handleFormClick = (e) => {
        e.preventDefault()
    }

    const simpleFormStyle = {
        backgroundColor: localStorage.getItem('color') ? localStorage.getItem("color"): "white",
        color: localStorage.getItem('fontColor') ? localStorage.getItem('fontColor') : "black",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        padding: "10px"
    }

  return (
    <form className="simple-form">
        <h3>Sign Up</h3>
        <input className="simple-form-input" placeholder="email" value={email} type="email"/>
        <input className="simple-form-input" placeholder="password" value={password} type="password"/>
        <button className="simple-form-btn" style={simpleFormStyle} onClick={() => handleFormClick()} type="submit">Submit</button>
    </form>
  )
}

export default Form