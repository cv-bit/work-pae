import React from 'react'
import DisplayFunctions from '../../helpers/DisplayFunctions'
import {SamplePageObj} from '../../helpers/SamplePageObj'

import './books.css'

const Books = ({fontColor, color, setFontColor, setColor}) => {


  return (
    <div className="books-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", backgroundColor: color, color: fontColor, margin: "0", padding: "15px 5px"}}>Books</h1>
        <div className="rect-container">
            {
                SamplePageObj.map((rect, index) => {
                    console.log(rect)
                    return DisplayFunctions[rect.displayFunctionName](rect)
                })
            }
        </div>
    </div>
  )
}

export default Books