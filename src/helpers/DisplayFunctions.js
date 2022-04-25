import OnClickFunctions from './OnClickFunctions'

const displayVideo = (arr) => {
    return <video onClick={OnClickFunctions[arr.onClickFunctionName]} src={arr.displayArgs[0]} controls style={{width: arr.displayArgs[1], height: arr.displayArgs[2], position: "absolute", top: arr.displayArgs[3], right: arr.displayArgs[4]}}></video>
}

const displayImage = (arr) => {
    return <img onClick={OnClickFunctions[arr.onClickFunctionName]} src={arr.displayArgs[0]} style={{width: arr.displayArgs[1], height: arr.displayArgs[2], position: "absolute", top: arr.displayArgs[3], right: arr.displayArgs[4]}}/>
}

const displayRect = (arr) => {
    return <div onClick={OnClickFunctions[arr.onClickFunctionName]} style={{backgroundColor: arr.displayArgs[0], width: arr.displayArgs[1], height: arr.displayArgs[2], position: "absolute", top: arr.displayArgs[3], right: arr.displayArgs[4]}}></div>
}

const invisibleRect = () => {

} 

const linkPageObjs = ( obj2) => {
    return obj2
}

const DisplayFunctions =  {
    displayVideo,
    displayImage,
    displayRect
}

export default DisplayFunctions