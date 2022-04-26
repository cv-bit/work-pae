import OnClickFunctions from './OnClickFunctions'
import OnHoverFunctions from './OnHoverFunctions'

const displayVideo = (arr) => {
    return <video 
            onClick={OnClickFunctions[arr.onClickFunctionName]} 
            onMouseOver={OnHoverFunctions[arr.hoverFunctionName]}
            onMouseLeave={OnHoverFunctions[arr.hoverFunctionName]}
            src={arr.displayArgs[0]} 
            controls 
            style={{backgroundColor: "black", width: arr.displayArgs[1], height: arr.displayArgs[2]}} 
            poster={"https://source.unsplash.com/random"}></video>
}

const displayImage = (arr) => {
    return <img 
                onClick={OnClickFunctions[arr.onClickFunctionName]} 
                onMouseOver={OnHoverFunctions[arr.hoverFunctionName]}
                onMouseLeave={OnHoverFunctions[arr.hoverFunctionName]}
                src={arr.displayArgs[0]} 
                style={{width: arr.displayArgs[1], height: arr.displayArgs[2]}}
            />
}

const displayRect = (arr) => {
    return <div 
                onClick={OnClickFunctions[arr.onClickFunctionName]} 
                onMouseOver={OnHoverFunctions[arr.hoverFunctionName]}
                onMouseLeave={OnHoverFunctions[arr.hoverFunctionName]}
                style={{backgroundColor: arr.displayArgs[0],opacity: "75%", width: arr.displayArgs[1], height: arr.displayArgs[2]}}
            ></div>
}

const displayText = (arr) => {
    return <p 
            onClick={OnClickFunctions[arr.onClickFunctionName]} 
            onMouseOver={OnHoverFunctions[arr.hoverFunctionName]}
            onMouseLeave={OnHoverFunctions[arr.hoverFunctionName]}
            style={{width: arr.displayArgs[1], height: arr.displayArgs[2], margin: "15px"}}>
                {arr.displayArgs[0]}
            </p>
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