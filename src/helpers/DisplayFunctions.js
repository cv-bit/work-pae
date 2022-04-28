import OnClickFunctions from './OnClickFunctions'
import OnHoverFunctions from './OnHoverFunctions'
import Word from './Word'

const displayVideo = (arr, key) => {
    return <video 
                key={key}
                onClick={OnClickFunctions[arr.onClickFunctionName]} 
                src={arr.displayArgs[0]} 
                controls 
                style={{backgroundColor: "black", width: arr.displayArgs[1], height: arr.displayArgs[2]}} 
                poster={"https://source.unsplash.com/random"}>
            </video>
}

const displayImage = (arr, key) => {
    return <img 
                key={key}
                onClick={OnClickFunctions[arr.onClickFunctionName]} 
                onMouseEnter={(e) => arr.hoverFunctionName ? OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs) : ""}
                onMouseLeave={(e) => arr.hoverFunctionName ? OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs) : ""}
                src={arr.displayArgs[0]} 
                style={{width: arr.displayArgs[1], height: arr.displayArgs[2], margin: "10px"}}
                alt="img"
            />
}

const displayRect = (arr, key) => {
    return <div 
                key={key}
                onClick={() => OnClickFunctions[arr.onClickFunctionName](arr.displayArgs[6])} 
                onMouseEnter={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                onMouseLeave={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                style={{backgroundColor: arr.displayArgs[0],opacity: ".75", width: arr.displayArgs[1], height: arr.displayArgs[2], margin: "10px", position: arr.displayArgs[5], top: arr.displayArgs[3], right: arr.displayArgs[4]}}
            ></div>
}

const displayText = (arr, key) => {

    let wordArray = arr.displayArgs[0].split(' ')

    return <div key={key} style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
                {wordArray.map((word, i) => {
                    return <Word word={word} key={i} index={i} arr={arr}/>
                    })
                }
            </div>
}

const invisibleRect = () => {

} 

const linkPageObjs = ( obj2) => {
    return obj2
}

const DisplayFunctions =  {
    displayVideo,
    displayImage,
    displayRect,
    displayText
}

export default DisplayFunctions