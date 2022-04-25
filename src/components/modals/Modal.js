import React from 'react'

import './modal.css'

const Modal = ({onClick, style}) => {
  return (
    <div onClick={onClick} style={style} className="modal-container">

    </div>
  )
}

export default Modal