/*
let sqSize;
let qX;
let qY;
 console.log(i); //stop drawing after we hit 1let xDir;

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
    console.log("the mouse is on the left"); //if mouse on left then fill square black
  }
  else{
    fill(255); 
    console.log("the mouse is on the right");
  }

if(mouseY<200) { //if mouse y is less than 200 for y no stroke
  noStroke();
  }
  else if(mouseY>=200 && mouseY < 400){ //otherwise if mouse is greater than or equal to 200 and less than 400 (so between 200-400 then has stroke)
    stroke(127);
    strokeWeight(2);
  }
  else{ //otherwise as a final check the stroke is 127 and thick 20
    stroke(127);
    strokeWeight(20);
  }

  rect(sqX, sqY, sqSize);

}
//makes layers of moveable boxes

noStroke();
  fill(200,200,10);
  ellipse(circleXpos, heigh/2, 50);
  circle++;
 // if(circleXpos>=width || circleXpos<=0)
*/

 function setup(){
  createCanvas(800,600);
  background(220); //white background
  for(let i = 0; i <100; i+10+10){
    ellipse(i*100 + 50,100,i*10+10);
    //console.log(i); //stop drawing after we hit 1

  }
 }

/*
  function setup(){
  createCanvas(800,600);
  background(220); //white background
  for(let i = 0; i <10; i++){
    ellipse(i*100 + 50,100,100);
    console.log(i); //stop drawing after we hit 1

  */