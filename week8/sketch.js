let lucky;

async function setup() {
  lucky = await loadImage("assets/lucky.jpg);
  createCanvas(windowWidth, windowHeight);
  pixelDensity();
  print(:Original size: " + lucky.width + " , " + doggo.height;
  noLoop();
}

function draw(){
  background(0);
  image(lucky, 0, 0);
}
