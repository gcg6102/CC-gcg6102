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
/*
function setup(){
    createCanvas(windowWidth,windowHeight, WEBGL);
    pMapper = createProjectionMapper(this); //creates canvas
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
*/
/*
let pMapper; // mapper instance
let myQuad; // one face
let ballx;
let noise;
let x1;

function setup() {
    // p5.mapper needs WEBGL in createCanvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    // create the mapper
    pMapper = createProjectionMapper(this);
    // create one quad surface
    myQuad = pMapper.createQuadMap(400, 400);
    // if you want to position items in your sketch
    // do so with the quad you're targeting
    ballx = myQuad.width/2;
}

function draw() {
    background(0);
    //pass the name of a drawing function into displaySketch()
    myQuad.displaySketch(myDrawing);
}

// p5.mapper passes an offscreen canvas (mySketch) into this function
function myDrawing(mySketch) {
    // anything drawn on this surface needs 'mySketch.' in front of it
    mySketch.background("orange");
    mySketch.stroke(0);
    mySketch.strokeWeight(4);
    mySketch.line(0, 0, 400, 400); // diagonal line across the quad
    mySketch.noStroke();
    mySketch.fill(noise(map(offset)(255)));
    mySketch.ellipse(ballx, myQuad.height/2, 150);
     x1 = noise(map(offset*uniqueAngel*s) * width);
    ballx += 1;
    if(ballx>myQuad.width+75)ballx=-75;
}
function keyPressed(){
switch(key) {
    case "c":
        pMapper.toggleCalbiration();
        break;
    case "f":
        let fs = fullscreen();
        fullscreen(!fs);
        break;
    case "s":
        pMapper.load("maps/map.json");
        break;
    case "s":
        pMapper.save("map.json");
        break;
}
}
*/
let pMapper;
let doorQuad, Quad2, Quad3, Quad4;
let myDoor;
let inc = 20;
let unicornX = []; //make array of unicorns for the screen
let unicornY = [];
let totalUnicorns = 15;

class Door { 
  constructor(x, y, w, h) {
    this.x = x; //classes that allows values for each dimension of the door
    this.y = y;
    this.w = w;
    this.h = h;
    this.col = random(255); //random color
  }

  move(maxW) {
    this.x = this.x + 1; //changes the position in the x direction
    if (this.x > maxW) {
      this.x = 0;
    }
  }

  show(pg) {
    pg.fill(this.col, 200, 255);

    for (let i = 0; i < pg.height * 2 + inc; i += inc) {
      pg.line(0, pg.height - i, i, pg.height); 
    }

    pg.rect(this.x, this.y, this.w, this.h); //the door
    pg.ellipse(this.w / 2 + 165, this.h / 2 + 150, 10, 20); //a door knob
    pg.arc(190, 150, 80, 80, PI, 0); //i wanted a door arc that fits the door makes it so the half circle its curcves on the top and flat on the bottom
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  pMapper = createProjectionMapper(this);

  // Create four projection mapping quads
  doorQuad = pMapper.createQuadMap(400, 400);
  Quad2 = pMapper.createQuadMap(400, 400); 
  Quad3 = pMapper.createQuadMap(400, 400);
  Quad4 = pMapper.createQuadMap(400, 400);
  //creates each quad

  myDoor = new Door(150, 150, 80, 200); //an object instance of door
   for (let i = 0; i < totalUnicorns; i++) {
    unicornX.push(random(30, 370)); // Keep within 400x400 buffer bounds
    unicornY.push(random(30, 370));
  }
}

// Quad 1 Sketch: Moving Door
function renderDoorSketch(pg) {
  pg.background(20, 255, 255);
  myDoor.show(pg); //connects show function and move to the door
  myDoor.move(pg.width);
}

// Quad 2 Sketch: Solid Color Surface
function Sketch2(pg) { //essentially the same as coding functions, put parings objects dot pg
  pg.background("lightgreen"); //function for quad 2 i turned it to be lime green
  pg.textSize(60);
  pg.text("🦄", 200, 200); 
   for (let i = 0; i < totalUnicorns; i++) {
    pg.text("🦄", unicornX[i], unicornY[i]);
  }
}

// Quad 3 Sketch: Animated emoji
function Sketch3(pg) {
  pg.background(50, 50, 200);

  // Center alignment so the emoji grows from the middle
  pg.textAlign(CENTER, CENTER);

  // Calculate dynamic font size using the sine wave formula
  let pulseSize = 100 + sin(frameCount * 0.05) * 50;
  pg.textSize(pulseSize); //makes the emoji pulse

  // Render emoji onto the offscreen graphics buffer
  pg.text("😈f", pg.width / 2, pg.height / 2); //i used emojis for this time kinda spooky halloween
}

// Quad 4 Sketch: Reusing the Door Sketch
function Sketch4(pg) {
  renderDoorSketch(pg);
}

function draw() {
  background(0);

  // Display sketches onto their quads
  doorQuad.displaySketch(renderDoorSketch);
  Quad2.displaySketch(Sketch2);
  Quad3.displaySketch(Sketch3);
  Quad4.displaySketch(Sketch4);
}

function keyPressed() {
  if (key === 'c' || key === 'C') {
    pMapper.toggleCalibration();
  }
  if (key === 's' || key === 'S') {
    pMapper.save();
  }
  if (key === 'f' || key === 'F') {
    fullscreen(!fullscreen());
  }
}
