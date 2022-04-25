export const SamplePageObj = 
    [
        {   
            displayFunctionName: "displayRect", 
            displayArgs: [
                "rgb(255, 75, 0)",
                50, 
                50, 
                200,
                800,
                "key" 
            ], 
            onClickFunctionName: "PlaySound", 
            hoverFunctionName: "displayDarker", 
        },
        {   
            displayFunctionName: "displayImage", 
            displayArgs: [
                "https://source.unsplash.com/random", 
                100, 
                100, 
                400, 
                400,
                "key"
            ], 
            onClickFunctionName: "PlaySound", 
            hoverFunctionName: "displayDarker", 
        },
        {   
            displayFunctionName: "displayVideo", 
            displayArgs: [
                "", 
                350, 
                200, 
                50, 
                50
            ],
            onClickFunctionName: "JumpToVideo", 
            hoverFunctionName: "displayLighter", 
        },
    ]