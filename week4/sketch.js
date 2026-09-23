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
let seed = 1234;

function setup() {
    createCanvas(800, 600);
}

//allows you to section off changes in the code and makes code more legible
function drawRectangle(_x, _y, _rot){ //passing values in function x, y, and rotation
    // console.log(rot);
    let localXpos = _x;
    let localYpos = _y;
    let localRot = _rot;
    push();
    translate(localXpos,localYpos);
    rotate(localRot);
    rect(0,0,40);
    pop();
    //FIND RAINBOW ONE colorMode(HSB, 360, 100, 100);
    //P5.js libraries to make something cool like glitches, etc. plotSVG(SVG pen plotter library)
}

function keyPressed() {
    seed = floor(random(13001));
}

function draw() {
    // seed fixes values each time through draw
    noiseSeed(seed);
    randomSeed(seed);
    background(220);
    noFill();

    let step = 64; // space in grid
    let inc = .01; // amt to incrment noise val
    let noiseVal = random();
    rectMode(CENTER);
    // increment noiseVal every time through the loop
    for (let x = step; x < width - step; x += step) {
        for (let y = step; y < height - step; y += step) {
            let rot = TWO_PI * noise(noiseVal);
            drawRectangle(x,y,rot);
            noiseVal += inc;
        }
    }
    // noLoop();
}