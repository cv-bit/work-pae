class OnHoverFunctions {
    displayDarker(e) {
        console.log("hover darker")
        e.target.style.transform = 'scale(1.2)'
    }
    displayLighter(e) {
        console.log("hover lighter")
        e.target.style.background = 'blue'
    }
}

export default new OnHoverFunctions()