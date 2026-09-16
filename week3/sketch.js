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
/*
  function setup(){
  createCanvas(800,600);
  background(220); //white background
  for(let i = 0; i <10; i++){
    ellipse(i*100 + 50,100,100);
    console.log(i); //stop drawing after we hit 1

  }
}
*/
/*
 function setup(){
  createCanvas(800,600);
  background(220); //white background
  for(let i = 0; i <100; i+10+10){
    ellipse(i*100 + 50,100,i*10+10);
    //console.log(i); //stop drawing after we hit 1


  */
/*
    function draw(){
      createCanvas(800,600);
      background(220);
      colorMode(HSB);
      noFill();
      for(let i = 0; i < 50; i++){
        ellipse(width/2,height/2, i*10+2);
      }
      for(let i = 0; i < 50; i++){
        ellipse(mouseX,mouseY, i*10+2);
        //makes spirals somethign to make autoamtion easier lowkey
    */
/*
  let rot = 0.0;

  function setup(){
    createCanvas(800,600);
    //colorMode(HSB);
    noStroke();
  };

  function draw(){
      background(220);
      rect(CENTER);
      for(let x = 0; x < 10; x++){
        for(let y = 0; y < 7; y++){
            rect(x*75+25, y*75+25, 50);
            //repeatable, variation, and make something dymanic
            //square boxes along the screen!!! nested loop
            //updates the first y from each point while making a 3d array 
        }
        
      }
      noLoop();
     // console.log(frameCount); //will report back
      //frame count can introduce something dymanic
    };
    */
/* fill(360*(x*y/70, 100, 100)); //does rainbow
            push();
            translate(x*75+25, y*75+25);
            rotate(rot);
            rect(0,0,50);
            pop();
            rot+=0.02;
            */


 let x, y;
 let width = 10;
 let height = 20;
 
 function setup(){
    createCanvas(800,600);
    background(220);
    strokeWeight(2);
    noFIll();
  }

  function draw(){
    ellipse(xPos, yPos, 50); 
    let xPos = ((sin(x)+1)/2)*width;
    let yPos = ((cos(x)+1)/2)*height;
    //what things do i find visually compelling?
    //i love frutiger aero and stripes//p5polar library to put p5 into polar coordinates and a for loop
    //cartesian vs. polar coordinated extra credit p5.js
    //point(xPos, width/2);
    //x+=incX;
  }

  
