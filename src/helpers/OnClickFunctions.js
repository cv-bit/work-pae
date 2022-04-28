import { SamplePageObj } from "./SamplePageObj"
import DisplayFunctions from "./DisplayFunctions"


class OnClickFunctions {
    PlaySound() {
        console.log("play sound")
    }

    JumpToVideo(i) {
        console.log("jump to video" + i)
    }
    LinkObjs(key) {
        const linkStart = (key) => {
            SamplePageObj.map((obj, index) => {
                if (obj.objId == key) {
                    if(obj.displayArgs[0] == "rgb(100, 75, 255)") {
                        obj.displayArgs[0] = "rgb(250, 250, 55)"
                    } else {
                        obj.displayArgs[0] = "rgb(100, 75, 255)"
                    }
                }
            })
        }
        linkStart(key)
    }
    HighlightText() {
        console.log("highlight text")
    }
    Keyword(word) {
        console.log("keyword " + word)
    }
}

export default new OnClickFunctions()