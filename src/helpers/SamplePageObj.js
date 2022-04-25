export const SamplePageObj = 
    [
        {   
            displayFunctionName: "displayRect", 
            displayArgs: [
                "rgb(255, 75, 0)",
                50, 
                20, 
                230,
                650,
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
                150,
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
                50,
                "key"
            ],
            onClickFunctionName: "JumpToVideo", 
            hoverFunctionName: "displayLighter", 
        },
        {   
            displayFunctionName: "displayText", 
            displayArgs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
                200, 
                "auto",
                "key"
            ],
            onClickFunctionName: "JumpToVideo", 
            hoverFunctionName: "displayDarker", 
        },
    ]