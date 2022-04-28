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
    Keyword(word) {
        console.log("keyword " + word)
    }
}

export default new OnClickFunctions()