

function setup() {
  createCanvas(200, 400);
  background(100,200,100);
  
}

function draw() {
  ellipse(100,100,50); //x,y,radius, y height command ellipse does shape
  rect(100,200,50,50); //rectangle is starting in the center of the circle so the origin point is the top left corner rather than the center, different default points
}

//create canvas sets up the space to draw on screen and windowWidth and windowHeight are the dimensions of it
//whitespace not important in javascript
//origin is 0,0 coordinates are x,y
//center point is width/2 height/2
