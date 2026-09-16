let sqSize, sqX, sqY;

function setup(){
  createCanvas(800,600);
  sqX = width/2;
  sqY = height/2;
  sqSize=100;
  rectMode(CENTER);
  strokeWeight(2);
}

function draw(){
  background(220);
  if(mouseX<width/2){
    fill(0);
    console.log("the mouse is on the left");
  }
  else{
    fill(255);
  }
  rect(sqX, sqY, sqSize);
}

