// Making Operating system automation using Robotjs library 
var i = 10; 
console.log(i);

var robot = require("robotjs");
// robot.moveMouseSmooth(500,500); // it will move the moue smoothly from it's initial position to x,y position


var id = setInterval(showMouseLocation,1000);
console.log(id); 
function showMouseLocation(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }
} 