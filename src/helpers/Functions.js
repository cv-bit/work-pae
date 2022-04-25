class Functions {
    OrangeBoy(y, x, w, h) {
        console.log("orange boy")
        return <div draggable style={{width: w, height: h, backgroundColor: "orange", position: "absolute", top: x, right: y}}> 

        </div>
    }

    GreenBoy(y, x, w, h) {
        console.log("green boy")
        return <div draggable style={{width: w, height: h, backgroundColor: "green", position: "absolute", top: x, right: y}}> 

        </div>
    }

    BlueBoy(y, x, w, h) {
        console.log("blue boy")
        return <div draggable style={{width: w, height: h, backgroundColor: "blue", position: "absolute", top: x, right: y}}> 

        </div>
    }
}

export default new Functions()