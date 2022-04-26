import OnClickFunctions from './OnClickFunctions'
import OnHoverFunctions from './OnHoverFunctions'

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
                onMouseEnter={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                onMouseLeave={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                src={arr.displayArgs[0]} 
                style={{width: arr.displayArgs[1], height: arr.displayArgs[2], margin: "10px"}}
            />
}

const displayRect = (arr, key) => {
    return <div 
                key={key}
                onClick={OnClickFunctions[arr.onClickFunctionName]} 
                onMouseEnter={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                onMouseLeave={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                style={{backgroundColor: arr.displayArgs[0],opacity: "75%", width: arr.displayArgs[1], height: arr.displayArgs[2], margin: "10px"}}
            ></div>
}

const displayText = (arr, key) => {

    let wordArray = arr.displayArgs[0].split(' ')

    return <div key={key} style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
                {wordArray.map((word, i) => {
                return <p 
                            key={i}
                            onClick={OnClickFunctions[arr.onClickFunctionName]} 
                            onMouseEnter={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                            onMouseLeave={(e) => OnHoverFunctions[arr.hoverFunctionName](e, arr.displayArgs)}
                            style={{width: "fit-content", height: arr.displayArgs[2], padding: "2.5px", margin: "0"}}>
                                {word}
                            </p>})}
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