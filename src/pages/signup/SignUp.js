import React from 'react'
import InfoModal from '../../components/modals/InfoModal'
import Form from '../../components/modals/Form'

import './signup.css'

const SignUp = ({fontColor, color, setFontColor, setColor}) => {
  return (
    <div className="signup-container">
        <InfoModal component={Form}/>
    </div>
  )
}

export default SignUp