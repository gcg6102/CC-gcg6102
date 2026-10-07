/* random seed
let randVal;
let randRange;
let seed;

function setup() {
    createCanvas(800, 600);
    // random produces different results each time the sketch is run
    // default vaules are between 0.0 to 1.0
    //seed= 120934;
    randomSeed(seed);
    randVal = random();
  
    // a ranged set of arguments gives a val in that space
    randRange = random(0, width);
}

function draw() {
    background(220);
    textSize(32);
    text("random: " + randVal, 100, 100);
    text("random range: " + randRange, 100, 200);
    text("another random range: " +randRange, 100,300);
    noLoop();
}
    */

// noise is more organic
// always retursn a value between 0-1

/* Noise
let noiseVal;
let seed;

function setup() {
    createCanvas(800, 600);
    // feed a value into noise() and get a value back
    // larger the step in the argument, the bigger the jump in noise
    noiseVal = 10;
    // seed = 1234; // seed pauses you to a specific value
    // noiseSeed(seed); // will fix the output on subsequent runs
    //noise has more continuity than random 
}

function draw() {
    background(220);
    let nValue = noise(noiseVal); //print out noise value
    textSize(32);
    text("intial noise: " + nValue, 100, 100);
    noiseVal += .01; //increment the noise each step
    let incValue = noise(noiseVal);
    text("small step: " + incValue, 100, 200);
    noiseVal += 1.0; //bigger leap in noise value
    incValue = noise(noiseVal);
    text("bigger step: " + incValue, 100, 300);
    noLoop();
}
    */

//begin shape and end shape to make polygons then give it vertex to draw then will automatically connect points


/*
//start at mouse when at 0 put up 800, 
//Noise to make things change a grid of squares gives you a new random seed to be dymanic and predictable
// 2PI Radians is full rotation or angle converted to Degrees * 360 as the same things
// Press any key to generate a new seed
let seed = 1234;

function setup() {
    createCanvas(800, 600);
}

function keyPressed() {
    seed = floor(random(13001));
}

function draw() {
    // seed fixes values each time through draw
    randomSeed(seed);
    noiseSeed(seed);
    background(220);

    stroke(0);
    noFill();
    textAlign(CENTER);
    textSize(16);

    noStroke();
    fill(0);
    text("random", width / 4, 30);
    text("noise", (3 * width) / 4, 30);

    // randomness, there is no relationship
    stroke(0);
    noFill();
    beginShape();
    for (let x = 40; x < width / 2 - 40; x += 8) {
        vertex(x, random(80, 220));
    }
    endShape();

    // subsequent values are related
    beginShape();
    for (let x = width / 2 + 40; x < width - 40; x += 8) {
        // update the values of the noise each time thru the loop 
        // increase and decrease the val to see bigger change
        vertex(x, map(noise(x * 0.02), 0, 1, 80, 220)); //gives you first argument as incoming value, second is lwoer end of that value, next is upper end, last two are lower and upper bound of output
    //maps out the scales of things
    //Perlin Noise for coming up with algortihm he won a Techncial Emmy for special effects algorithm made Tron first computer generated gives natural variation for things

      }
    endShape();


    for (let x = 60; x < width / 2 - 40; x += 45) {
        circle(x, 350, random(10, 60));
    }
    for (let x = width / 2 + 60; x < width - 40; x += 45) {
        circle(x, 350, map(noise(x * 0.02), 0, 1, 10, 60));
    }
}
*/

//can feed nosie two values and it'll return 1

//let rot = TWO_PI * noise(x*inc, y*inc);

// Press any key to generate a new seed
//code from in class

//these look like UFOS lol

/*
let seed = 1234;

function setup() {
    createCanvas(800, 600);
     colorMode(HSB);
}

//allows you to section off changes in the code and makes code more legible
function drawCircle(xCir, yCir, rotCir){ //passing values in function x, y, and rotation
    // console.log(rot);
    let localXpos = xCir;
    let localYpos = yCir;
    let localRot = rotCir;
    push();
    translate(localXpos,localYpos);
    stroke(random(360), random(360), random(360)); //changes colors randomly 
    rotate(localRot);
    //rect(0,0,40);
    //circle(0,0,40);
    ellipse(30,33,5*PI,3*10*PI);
    circle(30,35,5*PI,3*10*PI);
    ellipseMode(arc(20,40,60,70,80,90,70));
    rectMode((line(8,8,10^2-80,10^2-8, 10^2-80)));
    pop();
    //P5.js libraries to make something cool like glitches, etc. plotSVG(SVG pen plotter library)
  //this week add a new line to download plotSVG library and access functionality
}

function keyPressed() {
    seed = floor(random(14002));
    translate(width/6, height/6);
}

function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    let step = 100; // space in grid
    let inc = .09; // amt to incrment noise val
    let noiseVal = random();
    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            let rot = TWO_PI * noise(noiseVal);
            drawCircle(x,y,rot); 
            noiseVal += inc;

        }
    }
    // noLoop();
}

*/
//fill 8.5 by 11 paper start small then scale up!
//draw a hatch patter to do overlays on top of shapes and such

//to export SVG put between beginRecord and endRecord the segment of code then saves to your computer locally
// press s will download and tell you the seed so you can enter it to see again
//use incscape - open source illustrator interface to print stuff! I Draw2.0 Control Dialog boxes go early and often to test it
//plotters room 325
//pen plotter skirt or peice of clothing with fabric marker hmmm?!

//MACRONS
/*
let seed = 1234;

function setup() {
    createCanvas(800, 600);
     colorMode(HSB);
}

//allows you to section off changes in the code and makes code more legible
function drawCircle(xCir, yCir, rotCir){ //passing values in function x, y, and rotation
    // console.log(rot);
    let localXpos = xCir;
    let localYpos = yCir;
    let localRot = rotCir;
    push();
    translate(localXpos,localYpos);
    stroke(random(360), random(360), random(360)); //changes colors randomly 
    rotate(localRot);
    //rect(0,0,40);
    //circle(0,0,40);
    ellipse(30,33,5*PI,3*10*PI);
    rect(40,35,5*PI,3*10*PI);
    ellipse(50,35,5*PI,3*10*PI);
   // rect(65,35,5*PI,3*10*PI);
   // ellipse(80,35,5*PI,3*10*PI);
   // rect(90,35,5*PI,3*10*PI);
    ellipseMode(arc(20,40,60,70,80,90,70));
    rectMode((line(8,8,10^2-80,10^2-8, 10^2-80)));
    pop();
    //P5.js libraries to make something cool like glitches, etc. plotSVG(SVG pen plotter library)
  //this week add a new line to download plotSVG library and access functionality
}

function keyPressed() {
    seed = floor(random(14002));
    translate(width/6, height/6);
}

function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    let step = 100; // space in grid
    let inc = .09; // amt to incrment noise val
    let noiseVal = random();
    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            let rot = TWO_PI * noise(noiseVal);
            drawCircle(x,y,rot); 
            noiseVal += inc;

        }
    }
    // noLoop();
}
*/

/*

//let seed = 1679;

let seed = 222;   

function setup() {
    createCanvas(200, 200);
     colorMode(HSB);
}

//allows you to section off changes in the code and makes code more legible
function drawCircle(xCir, yCir, rotCir){ //passing values in function x, y, and rotation
    // console.log(rot);
    let localXpos = xCir;
    let localYpos = yCir;
    let localRot = rotCir;
    push();
    translate(localXpos,localYpos);
    stroke(random(360), random(360), random(360)); //changes colors randomly 
    rotate(localRot);
    //rect(0,0,40);
    //circle(0,0,40);
    

   //had to adjust the design so that the macrons are in alignment again
   //i asked several idm folks what they thought my code was and several guessed a burger or macroons which makes me happy
    ellipse(46,33,3*PI,1*10*PI);
    rect(40,33,3*PI,1*10*PI);
    ellipse(34,33,3*PI,1*10*PI);
   // rect(65,35,5*PI,3*10*PI);
   // ellipse(80,35,5*PI,3*10*PI);
   // rect(90,35,5*PI,3*10*PI);
   //ellipseMode(arc(20,40,60,70,80,90,70));
   // rectMode((line(8,8,10^2-80,10^2-8, 10^2-80)));
    pop();
    //P5.js libraries to make something cool like glitches, etc. plotSVG(SVG pen plotter library)
  //this week add a new line to download plotSVG library and access functionality
}

function keyPressed() {
    seed = floor(random(14002));
    translate(width/2, height/2);
}

function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    //let step = 10; // space in grid make scribbles for a skirt
    let step = 15;
    let inc = .05; // amt to incrment noise val
    let noiseVal = random();
    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            let rot = TWO_PI * noise(noiseVal);
            drawCircle(x,y,rot); 
            noiseVal += inc;
        }
    }
    
     noLoop();
}
*/



//let seed = 1679;

let seed = 222;  //i like this seed

//let seed = 536;



p5.disableFriendlyErrors = true; // keep warnings quiet
let bDoExportSvg = false; 


function setup() {
    createCanvas(576, 384);
     colorMode(HSB); //noise

}

let x0 = 200;
let y0 = 150;


//allows you to section off changes in the code and makes code more legible
function drawCircle(xCir, yCir, rotCir){ //passing values in function x, y, and rotation
    // console.log(rot);
    let localXpos = xCir;
    let localYpos = yCir;
    let localRot = rotCir;
    push();
    translate(localXpos,localYpos);
    stroke(random(360), random(360), random(360)); //changes colors randomly 
    rotate(localRot*35); //i added noises for more randomness to make the shapes overlap
    //rotate(localRot);
    //rect(0,0,40);
    //circle(0,0,40);
    
    //i tired to do outlined hearts but it just looked like two circles and a traiaggnle because I can't use the fill
  /* HEARTS
    ellipse(x0 - 35.5, y0 - 24, 100, 100);
    ellipse(x0 + 35.5, y0 - 24, 100, 100);
    triangle(x0 - 80, y0, x0 + 80, y0, x0, y0 + 96);
    */
   //had to adjust the design so that the macrons are in alignment again
   //i asked several idm folks what they thought my code was and several guessed a burger or macroons which makes me happy
    ellipse(46,33,3*PI,1*10*PI);
    rect(40,33,3*PI,1*10*PI);
    ellipse(34,33,3*PI,1*10*PI);
    //rect(65,35,5*PI,3*10*PI);
   // ellipse(80,35,5*PI,3*10*PI);
   // rect(90,35,5*PI,3*10*PI);
   //ellipseMode(arc(20,40,60,70,80,90,70));
   // rectMode((line(8,8,10^2-80,10^2-8, 10^2-80)));
    pop();
    //P5.js libraries to make something cool like glitches, etc. plotSVG(SVG pen plotter library)
  //this week add a new line to download plotSVG library and access functionality
}



function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

     if (bDoExportSvg){
    beginRecordSvg("myOutput.svg");
  }


    //let step = 10; // space in grid make scribbles for a skirt
    let step = 60;
    let inc = .1; // amt to incrment noise val
    let noiseVal = random();
    rectMode(CENTER);

   

    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            let rot = TWO_PI * noise(noiseVal);
            drawCircle(x,y,rot); 
            noiseVal += inc;

  

  // Draw stuff here, such as:
  //line(0,0, mouseX, mouseY); 

     //background(245)

     //noLoop();

}
 
}
if (bDoExportSvg){
    endRecordSvg();
    bDoExportSvg = false;
  }
}


function keyPressed(){
  if (key == 's'){ 
    bDoExportSvg = true; 
  }
}

