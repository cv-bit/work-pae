class OnClickFunctions {
    PlaySound() {
        console.log("play sound")
    }

    JumpToVideo(i) {
        console.log("jump to video" + i)
    }
    LinkObjs() {
        console.log("link to obj")
    }
    HighlightText() {
        console.log("highlight text")
    }
    Keyword(i) {
        console.log("keyword" + i)
    }
}

export default new OnClickFunctions()