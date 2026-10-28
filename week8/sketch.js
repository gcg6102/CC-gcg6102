let lucky;

async function setup() {
  lucky = await loadImage("assets/lucky.png);
  createCanvas(windowWidth, windowHeight);
  pixelDensity();
  print(:Original size: " + lucky.width + " , " + lucky.height;
  noLoop();
}

function draw(){
  background(0);
  image(lucky, 0, 0);
}
