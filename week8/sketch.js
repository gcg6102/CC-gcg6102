let lucky;

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
}

//loading image in p5.js
