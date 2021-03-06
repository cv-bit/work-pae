import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import './footer.css'

const Footer = ({bgColor, setBgColor}) => {
    const [color, setColor] = useState('white')
    const location = useLocation()

    useEffect(() => {
        if(bgColor == "#e5e4e2") {
            setColor('black')
        } else {
            setColor('white')
        }
    }, [bgColor])

  return (
    location.pathname.includes('samplereader') ? "" : <div className="footer-container" style={{backgroundColor: bgColor}}>
                                                            <h3 style={{color: color, padding: "15px", margin: "0"}}>&copy; 2022 - 2023 Practical American English</h3>
                                                        </div>
  )
}

export default Footer