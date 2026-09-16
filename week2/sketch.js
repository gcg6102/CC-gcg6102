
/*
function draw() {
  ellipse(100,100,50); //x,y,radius, y height command ellipse does shape
  rect(100,200,50,50); //rectangle is starting in the center of the circle so the origin point is the top left corner
  
  push();
  translate(150,100);
  rotate(45);
  rect(200,200,50,50); //rectangle is starting in the center of the circle so the origin point is the top left corner
  pop();
  //manipulates rectangle easily
  //draws a triangle with three points

  fill(190,100,100);
}


let xPos;
let yPos;
let randomx;


function setup() {
  //createCanvas(800, 600); //width, height
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); //hue, saturation, brightness it goes over the color wheel ROYGBIV
  background(180,100,100);
  xPos = width/2; //whatever follows is a variable
  yPos = height/2; //whatever follows is a variable
  randomX = random(0,width/2);
}

  function draw(){
    ellipse(xPos, yPos, 100);
    ellipse(xPos+randomX, yPos-30, 100);
  }

  function mousePressed() {
    xPos = mouseX; //whatever follows is a variable
    yPos = mouseY; //whatever follows is a variable
    console.log("xPos: " + xPos + " yPos: " + yPos); //populates screen with circles
    xPos = random(0,width); 
    yPos = random(0,height); //places them random spots of screen with each click


  }
  //rectMode(CENTER);// rather than the center, different default points
 //fills in the shape with color
  /*rectMode(CENTER); //changes the origin point to the center of the rectangle
  //colorhue to see hue and saturation and brightness HSB 360,100% saturated, 100% brightness
  rect(100,200,50,50); //now the rectangle is centered on the circle
  strokeweight(5);
  stoke(1,1,1); //white
  stroke(0,0,0); //black
  quad(100,100,200,110,300,10,500,100); //draws a square with four points
  point(10,10);
  degreeMode(DEGREES); //changes from degree to radians
  */
 //order of operation

  //fill vs. no fill color and makes a shape around a filled in shape
  //tranlate shifts all commands down


//quad() four arbitary points on a canvas being filled in, triangle(), arc(), give x y point() will draw dot, line() will draw lines, bezier(), can draw arbitary beginShape() endShape()

//create canvas sets up the space to draw on screen and windowWidth and windowHeight are the dimensions of it
//whitespace not important in javascript
//origin is 0,0 coordinates are x,y
//center point is width/2 height/2
