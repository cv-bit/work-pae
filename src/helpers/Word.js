import React, {useState, useEffect} from 'react'
import OnClickFunctions from './OnClickFunctions'
import OnHoverFunctions from './OnHoverFunctions'
import { Keywords } from './Keywords'

const Word = ({word, index, arr}) => {
    const [isKeyword, setIsKeyword] = useState(false)

    useEffect(() => {
        Keywords.forEach((keyword) => {
            if (keyword === word) {
                setIsKeyword(true)
            }
        })
    }, [word])

     return <p 
                onClick={() => isKeyword ? OnClickFunctions.Keyword(index) : OnClickFunctions[arr.onClickFunctionName](index)} 
                onMouseEnter={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                onMouseLeave={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                style={{backgroundColor: isKeyword ? "#fff0f5" : "", width: "fit-content", height: arr.displayArgs[2], padding: "2.5px", margin: "0", fontWeight: isKeyword ? "bold" : ""}}>
                    {word}
            </p>
  
}

export default Word