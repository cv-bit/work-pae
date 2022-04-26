class OnHoverFunctions {
    displayDarker(e, args) {
        if(e.type === "mouseenter") {
            e.target.style.background = 'rgb(0, 0, 255, .5)'
        } else if (e.type === 'mouseleave' && args[0].includes("rgb")) {
            e.target.style.background = args[0]
        } else if (e.type === 'mouseleave' && !args[0].includes('rgb')) {
            e.target.style.background = 'transparent'
        }
    }

    displayLighter(e, args) {
        if(e.type === "mouseenter") {
            e.target.style.transform = 'scale(1.05)'
        } else if (e.type === 'mouseleave') {
            e.target.style.transform = 'scale(1)'
        }
    }
}

export default new OnHoverFunctions()