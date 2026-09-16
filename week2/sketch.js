
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


//SCENE 1: xray of boba 

let xPos;
let yPos;
let y = 100;
let x = 100;
let randomx;
windowWidth = 800;
windowHeight = 800;


function setup() {
  //createCanvas(800, 800); //width, height
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); //hue, saturation, brightness it goes over the color wheel ROYGBIV
  background(177,100,100);
  //what it's like to swallow a boba ball
 // xPos = width/2; //whatever follows is a variable
 // yPos = height/2; //whatever follows is a variable
  //randomX = random(0,width/2);
  noFill();
  stroke('red');
  ellipse(200,250,200, 350, 200);
  ellipse(600,250,400, 700, 200);
  ellipse(410,600,400, 300, 200);
  stroke('black');

}

//this is where i go off course trying to find other transformations
x = 60;
y = 60; 
function mouseReleased(){
  fill("orange");
  triangle(x,y,140,10,10);
   x = x * 2;
   y = y * 2;
   fill("yellow");
  rect(10,10,x,10,y);
  rotate(random(100));
}

function draw(){
   // ellipse(400,400,230,400);
   // ellipse(xPos, yPos, 100);
   // ellipse(xPos+randomX, yPos-30, 100);
   // fill('brown');
   ellipse(x, y, 100);
   fill("brown")
   x = x + 2; //makes balls move right (slower pace across screen)
   y = y + 1; //makes balls move down only slightly 1 height

   //going to draw what boba ball looks like swallowed in stomach as a concept?

   if(mouseIsPressed){
    y = random(0,height);
    x = random(0,width);
    fill ('green');// the x and y move to different spots but at the same iteration of 2 for x and 1 for y 
    noFill();
    stroke("blue")
  }
}
function mouseDragged(){
  fill('violet');
  ellipse(mouseX, mouseY,100,100);
  fill('black');
  ellipse(mouseX,mouseY, 50,50)
}

rect(10,20,30,40,50,60,70,80);




//scene two: boba balls going down a slide
/*

ellipseX = width/2;
ellipseY = height/2;
radius = 20;
diameter = radius * 2;
let movement = false;

function setup() {
  //createCanvas(800, 800); //width, height
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB); //hue, saturation, brightness it goes over the color wheel ROYGBIV
  background(177,100,100);
 // xPos = width/2; //whatever follows is a variable
 // yPos = height/2; //whatever follows is a variable
  //randomX = random(0,width/2);
  beginShape();
  vertex(100,50);
  vertex(200,20);
  vertex(200,100);
  vertex(60,100);
  vertex(50,70);
  vertex(250,70);
  vertex(400,50);
  vertex(500,50);
  vertex(500,80);
  vertex(500,90);
  vertex(500,200);
  vertex(600,200);
  vertex(600,200);
  vertex(700,200);
  vertex(650,100);
  vertex(670,200);
  vertex(690,200);
  vertex(710,500);
  vertex(690,500);
  vertex(650,500);
  vertex(650,300);
  vertex(670,300);
  vertex(640,200);
  vertex(640,100);
  fill("pink");
  endShape();
}

function mouseDragged(){
  fill('violet');
  ellipse(mouseX, mouseY,100,100);
  fill('black');
  ellipse(mouseX,mouseY, 50,50)
}




//custom shapes smooth curves


//i drew three xray circles in the x ray of boba being stuck in someone's digestive system


  ellipse(100, 100, 100);
   noFill(); //makes it look like slingies its cool tho idk 
   


function draw() {
  //rect(400,400,400,400); //x,y,width,height
  //ellipse(600,600,230,400); //x,y,radius, y height command ellipse does shape
  //ellipse(400,400,230,400); //x,y,radius, y height command ellipse does shape
  // tapioca ball that looks pretty with the background color
  ellipse(400,400,230,400);
  fill('violet');
}
  

   

  */
/*
   width = windowWidth;
    height = windowHeight;
  function mousePressed() {
    xPos = mouseX; //whatever follows is a variable
    yPos = mouseY; //whatever follows is a variable
  
    console.log("xPos: " + xPos + " yPos: " + yPos); //populates screen with circles
    xPos = random(0,width); 
    yPos = random(0,height); //places them random spots of screen with each click

  }
*/

//sources: https://p5js.org/reference/p5/noFill/ 
//https://youtu.be/y14SpHKL1gg?is=iUCChg-t65VnOu78
//https://editor.p5js.org/owenroberts/sketches/S1zan-JZX drag and draw