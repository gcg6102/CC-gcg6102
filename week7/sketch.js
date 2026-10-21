/*
Objects
let sphere;

//we are doing classes
//becomes availble for anything else you build

class Ball{
    constrcutor(){
        this.diam = random(20,100);
        this.col = color(random(30,150));
    }
    update(){
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
    }

    //breaks up steps for each part of the ball
    //creates a sort of animation
    //checks several things
    //update, checking the wall, draw on screen

}
*/

//Projection Mapping
function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL);
    pMapper = createProjectionMapper(this);
}

function draw(){
    background(0);
    myQuad.displaySketch(myDrawing); //calling the drawing drawing onto my sketch vs your sketch draws on one space
    //leftQuad.displaySketch(dots);
  // rightQuad.displaySketch(stripes);
}
//drawing stuff within the context
function myDrawing(mySketch){
    mySketch.background("blue");

}
//key functionality to edit and save and return to state
function keyPressed(){
    if (key == "c"){
        pMapper.toggleCalibration(); //calibrate in full screenmode to ensure dimenstions
    }
    if (key === "s"){
        pMapper.save("map.json");
    }
    if(key ==="l"){
        pMapper.load("maps/map.json");
    }
}