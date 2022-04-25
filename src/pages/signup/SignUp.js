import React from 'react'
import InfoModal from '../../components/modals/InfoModal'
import Form from '../../components/modals/Form'

import './signup.css'

const SignUp = ({fontColor, color, setFontColor, setColor}) => {
  return (
    <div className="signup-container">
        <h1 style={{width: "100%", height: "fit-content", textAlign: "center", backgroundColor: color, color: fontColor, margin: "0", padding: "15px 5px"}}>Sign up</h1>
        <InfoModal component={Form}/>
    </div>
  )
}

export default SignUp