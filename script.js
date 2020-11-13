var robot = require("robotjs");
var fs = require("fs");
setTimeout(startNotePad1 , 2000);

function startNotePad1(){
    robot.moveMouseSmooth(66,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeStringDelayed(" notepad",600); 
        robot.keyTap("enter");
        setTimeout(function(){
            robot.typeStringDelayed("Hello World I am Ankit automating my operating system" , 1500);
            robot.keyTap("enter");
            robot.moveMouseSmooth(1105,97);
            robot.mouseClick();
        },2000)
        setTimeout(startChrome , 2000);
    },1000); 
}

function startChrome(){
    robot.moveMouseSmooth(66,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeStringDelayed(" chrome",600); 
        robot.keyTap("enter");
        setTimeout(openTabs,2000);
    },2000);
}

function openTabs(){
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(var i =0 ; i < tabs.length ; i++){
        for(var j=0 ;j<tabs[i].length ; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter"); 

            if(j < tabs[i].length-1){
                robot.keyToggle("control" , "down");
                robot.keyTap("t");
                robot.keyToggle("control" , "up");
            }else if (i < tabs.length -1 ){
                robot.keyToggle("control" , "down");
                robot.keyTap("n");
                robot.keyToggle("control" , "up");
            }
        }
    }

    setTimeout(openNotePad , 2000); 
}


function openNotePad(){
    // console.log("kholte hai notepad bhi");
    robot.moveMouseSmooth(66,844);
    setTimeout(function(){
        robot.mouseClick();
        robot.typeStringDelayed(" notepad",600); 
        robot.keyTap("enter");
        setTimeout(writeNotepad , 2000);
    },2000);
}

function writeNotepad(){
    robot.typeStringDelayed("The system is ready to use. Enjoy!!" , 2000);
}