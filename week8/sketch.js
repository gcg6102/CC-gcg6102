/* let lucky;

async function setup() {
  lucky = await loadImage("assets/lucky.png");
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
    //lucky = await loadImage("assets/lucky.png");
  
  if(lucky.width > width) lucky.resize(width,0);
  if(lucky.height > height) lucky.resize(0,height); //adjusts the image within the canvas so it is sized correctly
  
  print("Original size: " + lucky.width + " , " + lucky.height);
  noLoop();
}

function draw(){
  background(0);
  image(lucky, 0, 0);
  //translate(mouseX, mouseY);
  //imageMode(CENTER); //just center the image
  
}
*/
//loading image in p5.js
//making a pixel array
//turn data into an array
//36 total elements makes 2D array
//0,0 ,0,1, 02, 1, 0, 1, 1, etc. 
//0s and 1s pixel array
//access pixels to ask questions about them
//with a for loop x and y axis 2D array

/* pixel array
let img;
let radiusNum = 12;
let diam = radiusNum * 2;
let off;
let yoff

async function setup() {
  createCanvas(800,600);
  //load pixels creates accesible pixel array puts into memory

  //let pixelNum = 4 * (y *img.width + x); //this allows you to see pixel in array multiple by 4 bc rgba = 128 access 2,3 y = 3 x = 2 
  let redValue = img.pixels[pixelNum + 1]; //give pixel red
  let greenValue = img.pixels[pixelNum + 2]; //give pixel green
    let blueValue = img.pixels[pixelNum + 3]; //give pixel green
}
//going into video images and moving from still images
*/

let vid;

async function setup(){
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  vid = await createVideo("assets/puppy.mov");
  vid.autoplay();
  vid.volume(0);
  vid.hide(); //commenting out hide puts videos on twice html video component necessary to embed a video on your page vs. the p5.js canvas need to join them
  vid.loop();
}

function draw(){
  background(220);
  image(vid, 0, 0);
  vid.loadPixels();

  for(let i = 0; i < vid.pixels.length; i += 4){
    let r = vid.pixels[i]; 
    let g = vid.pixels[i + 1];
    let b = vid.pixels[i + 2];
  }
  if(r < 110 && g < 110 && b < 110){
    vid.pixels[i] == 255; //if pixel less than ___ set pixel in array to 255;
  }
}

//ask questions about array how can i change values before i render it out

