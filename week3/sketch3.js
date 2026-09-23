
//Frutiger Drawing Two
//I put layered spirals over the design for Frutiger and changed it to apple red and grassy green colors

function setup(){
  createCanvas(800,600);
}

    function draw(){
        background(100);
        stroke(255, 0, 0);
        strokeWeight(2);
        noFill();
      for(let i = 0; i < 25; i++){  //code for cartesian in class but rectangle
        rect(width/2,height/2, i*10+2);
        circle(width/2,height/2, i*10+2);
        triangle(width/2,height/2, i*10+2);
         triangle(width/2,height/2, i*10+2);
      }
      for(let i = 0; i < 25; i++){
        rect(mouseX,mouseY, i*10+2); //code for cartesian in class but rectangle
        //makes spirals somethign to make autoamtion easier lowkey
      }
    
      for(i = 0; i < 10; i++){ //I manipulated the loop for the line to see if I could make it curve, I also wanted to recreate the size changing circles (It is angled liens more than it is curved however)
    //line(i+400,i*10,50,i*5);
    for(s = 0; s < 10; s++){ //Nested loop to change the components of the ellipse and the line and coloring
    ellipse(s*85, i*55, i * 4, i * 5);
    fill('green'); 
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
