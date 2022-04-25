import React from 'react'

import './infomodal.css'

const InfoModal = ({...props}) => {
  return (
    <div className="infomodal-container">
        <props.component/>
    </div>
  )
}

export default InfoModal