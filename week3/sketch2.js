
//Frutiger Drawing One

function setup(){
  createCanvas(800,600);
  colorMode(HSB);
}
function draw() {
  background(150,100,100);
  stroke(255, 0, 0);
  strokeWeight(5);

  for(i = 0; i < 10; i++){ //I manipulated the loop for the line to see if I could make it curve, I also wanted to recreate the size changing circles (It is angled liens more than it is curved however)
    //line(i+400,i*10,50,i*5);
    for(s = 0; s < 10; s++){ //Nested loop to change the components of the ellipse and the line and coloring
    ellipse(s*85, i*55, i * 4, i * 5);
    fill('orange'); 
    //rotate(65);
  }
    line(i-100,i*100,800,i+10);
    //
  for(y = 0; y < 10; y++){
    //line(y+100, y+100, y + -100, y + 10);
    ellipse(100)
  }

  

}
}
