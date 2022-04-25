import React from 'react'
import Functions from '../../helpers/Functions'

import './books.css'

const Books = ({fontColor, color, setFontColor, setColor}) => {

    const sampleData = [
        {   
            funcName: "OrangeBoy",
            displayFunctionName: "displayRect", 
            displayArgs: [220, 120, 0],
            onClickFunctionName: "playSound", 
            hoverFunctionName: "displayDarker", 
            x: 200,
            y: 200,
            w: 400,
            h: 200
        },
        {   
            funcName: "GreenBoy",
            displayFunctionName: "displayRect", 
            displayArgs: [22, 220, 24],
            onClickFunctionName: "playSound", 
            hoverFunctionName: "displayDarker", 
            x: 500,
            y: 500,
            w: 100,
            h: 100
        },
        {   
            funcName: "BlueBoy",
            displayFunctionName: "displayRect", 
            displayArgs: [22, 22, 240],
            onClickFunctionName: "jumpToVideo", 
            hoverFunctionName: "displayLighter", 
            x: 700,
            y: 500,
            w: 40,
            h: 200
        },
    ]

  return (
    <div className="books-container">
        <h1 style={{width: "100%", height: "fit-content",textAlign: "center", backgroundColor: color, color: fontColor, margin: "0", padding: "15px 5px"}}>Books</h1>
        <div className="rect-container">
            {
                sampleData.map((rect, index) => {
                    return Functions[rect.funcName](rect.x, rect.y, rect.w, rect.h)
                })
            }
        </div>
    </div>
  )
}

export default Books