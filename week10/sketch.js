// Promise.all() loads files in parallel, so setup() waits only as long as the slowest file.
/*
let Song1, Song2, Song3, song;
let currentSound = null;
let fft;
let rms;
let amp;

// volume

async function setup() {
  createCanvas(600, 800);
  
  [Song1, Song2, Song3] = await Promise.all([
    loadSound('Countdown.mp3'),
    loadSound('HSM.mp3'),
  loadSound('CoconutWater.mp3')
  ]);

  //used 

   fft = new p5.FFT(128);
  Song2.connect(fft);
  Song3.connect(fft);

  
    textAlign(CENTER, CENTER);
    textSize(32);
    // init buttons
   // Create UI buttons for track playback and pitch/frequency rate adjustment
    playSong1Btn = createButton('▶ Countdown');
    playSong1Btn.position(280, 433);
  playSong1Btn.size(40,2);
    playSong1Btn.mousePressed(() => playTrack(Song1));

  playSong2Btn = createButton('▶ HSM');
  playSong2Btn.position(198, 433);
  playSong2Btn.size(40,2);
  playSong2Btn.mousePressed(() => playTrack(Song2));

   playSong3Btn = createButton('▶ Coconut Water');
  playSong3Btn.position(353, 433);
   playSong3Btn.size(40,2);
  playSong3Btn.mousePressed(() => playTrack(Song3));

  highPitchBtn = createButton('High Pitch');
  highPitchBtn.position(200, 370);
  highPitchBtn.mousePressed(() => changeSpeed(1.5));

  normalPitchBtn = createButton('Normal Speed');
  normalPitchBtn.position(310, 370);
  normalPitchBtn.mousePressed(() => changeSpeed(1.0));
   


}
function playTrack(track) {
  if (currentSound && currentSound.isPlaying()) {
   // currentSound.stop();
  }
  currentSound = track;
  currentSound.play();
  }

function changeSpeed(rateVal) {
  if (currentSound) {
    currentSound.rate(rateVal); // Adjusts playback speed and frequency pitch together
  }
}

  //disney music player edit didn't work as a png only works if it's shaped a specific way couldn't remove background
   // disneyImage = await loadImage("DisneyMusicPlayer.png");


function draw() {
  background(240);
  textAlign(CENTER, CENTER);
  textSize(18);
  fill(30);
  //text('press 1 for Countdown, 2 for All in this together', 300, 150)
 // image(disneyImage,150,50,300,300)

   //analyzer = new p5.Amplitude(); //amplitude analyzer p5.js website so that I can link it to sound
   
  //https://p5js.org/examples/Sound-Measuring-Amplitude/

  //let spectrum = fft.analyze();

  // Extract bass (low) and treble (high) frequency energy (0.0 to 1.0)
  
  push();
  fill(127);
  stroke(0);
  pop();

  textAlign(CENTER);

  // Draw an ellipse with size based on volume
  ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);

  musicPlayer();
  textSize(10);
  fill("cyan");
  text('music player', 300, 330);

   let level = amp.getLevel(); 

  // Map level to spiral spacing
  let spiralTightness = map(level, 0, 0.3, 2, 20);

  stroke(255);
  beginShape();

  // Draw spiral
  for (let a = 0; a < angle; a += 0.1) {
    let r = spiralTightness * a;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape();

  // Increase angle, audio affects speed
  angle += 0.1 + level * 5;


}

function musicPlayer(){
  //fill(0);
  //ellipse(width/2,height/2,300,300);
  fill(240,150,220);
  
  //torus(30,15,5);
  ellipse(width/2,height/2,300,300);
  arc(width/2,height/2,250,250,100,180, 120)

  //heart shape from p5.js: https://editor.p5js.org/monicamonin/sketches/hWHc3EuFh
  //line(width/2+40,height/2+60,10,10);
     fill(0);
    //triangle(width/2,height/2,58,20,86,75);
  //cd speakers
   ellipse(width/2+100,height/2+10,20,20);
  ellipse(width/2+60,height/2+10,20,20);
   ellipse(width/2+20,height/2+10,20,20);
    ellipse(width/2-20,height/2+10,20,20);
  ellipse(width/2-60,height/2+10,20,20);
  ellipse(width/2-100,height/2+10,20,20);
   rect(width/2-110,height/2+30,50,20);
  rect(width/2-25,height/2+30,50,20);
  rect(width/2+50,height/2+30,50,20);
  ellipse(width/2,height/2-70,160,80,6);
  //lady bug spots
  //disney princess cd player
}
*/



let Song1, Song2, Song3;
let currentSound = null;
let fft;
let amp;
let angle = 0; // Declared globally for the spiral rotation

// UI Buttons
let playSong1Btn, playSong2Btn, playSong3Btn;
let highPitchBtn, normalPitchBtn;

async function setup() {
  createCanvas(600, 800);

  // Load sound files concurrently using async/await
  [Song1, Song2, Song3] = await Promise.all([
    loadSound('Countdown.mp3'),
    loadSound('HSM.mp3'),
    loadSound('CoconutWater.mp3')
  ]);

  // 1. Initialize FFT analyzer and connect songs
  fft = new p5.FFT(128);
  Song1.connect(fft);
  Song2.connect(fft);
  Song3.connect(fft);

  // 2. Initialize Amplitude meter and connect songs
  amp = new p5.Amplitude();
  Song1.connect(amp);
  Song2.connect(amp);
  Song3.connect(amp);

  // Initialize playback buttons
   playSong1Btn = createButton('▶ Countdown');
    playSong1Btn.position(280, 433);
  playSong1Btn.size(40,2);
    playSong1Btn.mousePressed(() => playTrack(Song1));

  playSong2Btn = createButton('▶ HSM');
  playSong2Btn.position(198, 433);
  playSong2Btn.size(40,2);
  playSong2Btn.mousePressed(() => playTrack(Song2));

   playSong3Btn = createButton('▶ Coconut Water');
  playSong3Btn.position(353, 433);
   playSong3Btn.size(40,2);
  playSong3Btn.mousePressed(() => playTrack(Song3));

  highPitchBtn = createButton('High Pitch');
  highPitchBtn.position(200, 370);
  highPitchBtn.mousePressed(() => changeSpeed(1.5));

  normalPitchBtn = createButton('Normal Speed');
  normalPitchBtn.position(310, 370);
  normalPitchBtn.mousePressed(() => changeSpeed(1.0));
   
}

function playTrack(track) {
  if (currentSound && currentSound.isPlaying()) {
    //currentSound.stop();
  }
  currentSound = track;
  currentSound.play();
}

function changeSpeed(rateVal) {
  if (currentSound) {
    currentSound.rate(rateVal);
  }
}

function draw() {
  background(240);

  // 3. Read the amplitude volume level (0.0 to 1.0)
  let level = amp.getLevel();
  let rms = level; // Assign rms for shape sizing

  // Draw volume-reactive pulsing circle
  push();
  fill(240, 150, 220, 150);
  stroke(0);
  ellipse(width / 2, height / 2 - 120, 20 + rms * 250, 20 + rms * 250);
  pop();

  // Draw audio-reactive spiral
  push();
  translate(width / 2, height / 2 - 120);
  let spiralTightness = map(level, 0, 0.4, 2, 18);

  //stroke(30);
  stroke("cyan")
  strokeWeight(10);
  noFill();
  beginShape();
  for (let a = 0; a < angle; a += 0.1) {
    let r = spiralTightness * a;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape();
  pop();

  // Rotate spiral faster when sound gets louder
  angle += 0.05 + level * 3;

  // Draw the CD player graphics

 

  // Label text
  musicPlayer();
   textSize(10);
  fill("lightblue");
  text('music player', 270, 330);
}


function musicPlayer(){
  //fill(0);
  //ellipse(width/2,height/2,300,300);
  fill(240,150,220);
  
  //torus(30,15,5);
  ellipse(width/2,height/2,300,300);
  arc(width/2,height/2,250,250,100,180, 120)

  //heart shape from p5.js: https://editor.p5js.org/monicamonin/sketches/hWHc3EuFh
  //line(width/2+40,height/2+60,10,10);
     fill(0);
    //triangle(width/2,height/2,58,20,86,75);
  //cd speakers
   ellipse(width/2+100,height/2+10,20,20);
  ellipse(width/2+60,height/2+10,20,20);
   ellipse(width/2+20,height/2+10,20,20);
    ellipse(width/2-20,height/2+10,20,20);
  ellipse(width/2-60,height/2+10,20,20);
  ellipse(width/2-100,height/2+10,20,20);
   rect(width/2-110,height/2+30,50,20);
  rect(width/2-25,height/2+30,50,20);
  rect(width/2+50,height/2+30,50,20);
  ellipse(width/2,height/2-70,160,80,6);
  //lady bug spots
  //disney princess cd player
}


//help with LLM for energy function and integrate amp



//trying to draw a ladybug was ahrd, then I tried to make a dither edit of my music player to then put on the screen and that failed, so i used primitives and text and an arc to make the music player, then i ran into the issue of the create a button only working below the canvas, so then i had to figure it out above the canvas


