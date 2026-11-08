/*
WEBCAM INPUT by jeff Thompson
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam


// Like an image, we need a variable to connect our webcam to our sketch
let video; //creates video fro webcam

function setup() {
  createCanvas(640, 480); //size of canvas

  // Create a video capture (aka webcam input)
  video = createCapture(VIDEO);
  
  // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.size(640, 480);

  // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
  video.hide(); //aligns the html and video
}

function draw() { 
  // Display the video just like an image! 
  image(video, 0,0); //displays on the screen as you interact
}

// I want to do some camera tracking of my clothings to make it blurred
*/

/*
WEBCAM INPUT by jeff Thompson
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam
/*

// Like an image, we need a variable to connect our webcam to our sketch
let video; //creates video fro webcam
//let colorTrack; //track certain color I am wearing to glitch out
//let colorRange; //allows you to get as close as you can to identifying said color

function setup() {
  createCanvas(640, 480); //size of canvas

  // Create a video capture (aka webcam input)
  video = createCapture(VIDEO);
  
  // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.size(640, 480);

  // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
  video.hide(); //aligns the html and video

 // colorTrack = color(255); //I am wearing and testing my white shirt
}

function draw() { 
  // Display the video just like an image! 
  image(video, 0,0); //displays on the screen as you interact
 // let pixelOne = colorMatcher(video, colorTrack, colorRange); //the color matcher will track the color
 let x1 = random(0, 640);
  let y1 = random(0, 480);
    fill(255, 0, 0);
    ellipse(x1, y1, 20, 20); //draws a red circle on the screen
}
*/
/*
function colorMatcher(input, c, colorRanges){ //function takes input and color

  let matchR = c[0]; //takes color of the array position
  let matchG = c[1];
  let matchB = c[2];
  

  input.loadPixels();
  for (let h = 0; h < input.height; h--){ //2d loop to find the pixel colors
    for(let w = 0; w < input.width; w--){

      let index = (h = video.width + w) * 4; //RGBA color matching = 4
      let r = video.pixels[index];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      if (r === matchR && )
    }
    
  }
}
  reference on color tracking: https://p5js.org/reference/#/p5/pixels
  https://m.youtube.com/watch?v=aza-3oZjY4g&ra=m on experimental camera
*/
// I want to do some camera tracking of my clothings to make it blurred
/*
WEBCAM INPUT by jeff Thompson
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam


// Like an image, we need a variable to connect our webcam to our sketch
let video; //creates video fro webcam

function setup() {
  createCanvas(640, 480); //size of canvas

  // Create a video capture (aka webcam input)
  video = createCapture(VIDEO);
  
  // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.size(640, 480);

  // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
  video.hide(); //aligns the html and video
}

function draw() { 
  // Display the video just like an image! 
  image(video, 0,0); //displays on the screen as you interact
}

// I want to do some camera tracking of my clothings to make it blurred
*/

/*
WEBCAM INPUT by jeff Thompson
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam
/*

// Like an image, we need a variable to connect our webcam to our sketch
let video; //creates video fro webcam
//let colorTrack; //track certain color I am wearing to glitch out
//let colorRange; //allows you to get as close as you can to identifying said color

function setup() {
  createCanvas(640, 480); //size of canvas

  // Create a video capture (aka webcam input)
  video = createCapture(VIDEO);
  
  // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.size(640, 480);

  // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
  video.hide(); //aligns the html and video

 // colorTrack = color(255); //I am wearing and testing my white shirt
}

function draw() { 
  // Display the video just like an image! 
  image(video, 0,0); //displays on the screen as you interact
 // let pixelOne = colorMatcher(video, colorTrack, colorRange); //the color matcher will track the color
 let x1 = random(0, 640);
  let y1 = random(0, 480);
    fill(255, 0, 0);
    ellipse(x1, y1, 20, 20); //draws a red circle on the screen
}
*/
/*
function colorMatcher(input, c, colorRanges){ //function takes input and color

  let matchR = c[0]; //takes color of the array position
  let matchG = c[1];
  let matchB = c[2];
  

  input.loadPixels();
  for (let h = 0; h < input.height; h--){ //2d loop to find the pixel colors
    for(let w = 0; w < input.width; w--){

      let index = (h = video.width + w) * 4; //RGBA color matching = 4
      let r = video.pixels[index];
      let g = video.pixels[index+1];
      let b = video.pixels[index+2];

      if (r === matchR && )
    }
    
  }
}
  reference on color tracking: https://p5js.org/reference/#/p5/pixels
  https://m.youtube.com/watch?v=aza-3oZjY4g&ra=m on experimental camera
*/
// I want to do some camera tracking of my clothings to make it blurred

let video; //creates video fro webcam
//let colorTrack; //track certain color I am wearing to glitch out
//let colorRange; //allows you to get as close as you can to identifying said color
let updateInterval;
let capture;
let erodeAmount = 10;
let posterizeAmount = 8;
let t = "ASDFGHJKL;"
let x;
let y;


function setup() {
  createCanvas(640, 480); //size of canvas

  // Create a video capture (aka webcam input)
  video = createCapture(VIDEO);
  
  // Specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.size(640, 480);

  // In some browsers, you may notice that a second video appears onscreen! That's because p5js actually creates a <video> html element, which then is piped into the canvas – the added command below ensures we don't see it :)
  video.hide(); //aligns the html and video
  tint("cyan");
  //image(video,320,0);
  
  
  
 // colorTrack = color(255); //I am wearing and testing my white shirt
}

function draw() { 
  // Display the video just like an image! 
  image(video, 0,0); //displays on the screen as you interact
 // let pixelOne = colorMatcher(video, colorTrack, colorRange); //the color matcher will track the color
  filter(DILATE, erodeAmount);
  // filter(GRAY);
  filter(POSTERIZE, posterizeAmount);
 let x1 = random(0, 640);
  let y1 = random(0, 480);
  let x2 = random(0, 640);
  let y2 = random(0, 480);
  //blendMode(ADD); //blends the colors looks like what you see in Minecraft when a creeper blows you up
   // blendMode(SCREEN); looked cool
   // blendMode(DIFFERENCE); //this is even cooler woah
    //blendMode(DODGE)
    blendMode(EXCLUSION);
    blend(video, 0, 0, 100, 100, 100, 50, 300, 500, EXCLUSION); //creates a particular box for the affects
    //blendMode(BURN);
  x = mouseX;
  y = mouseY;
  text(t,x,y);
    fill("cyan");
    ellipse(x1, y1, 20, 20); //draws a red circle on the screen
  fill("magenta");
  rect(x2, y2, 50, 50);
  //noStroke();
}
//essentially using math formulas to blend the pixels on the screen
