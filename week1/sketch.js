// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "use of coding languages for artistic expression as a medium", source: "Val" },
  { text: "being satisfyingly free in expression without a rubric or template", source: "Lucky" },
  { text: "coding for art, whimsy, and joy, no profit", source: "Tai" },
  { text: "technology to create different methods of art intersections", source: "Alexandra" },
  { text: "producing innovative products outside typical historical cannon of coding", source: "Genevieve" },
  { text: "coding that is not used for artificial means", source: "Camilla" },
  { text: "coding that expands beyond finite solutions, allowing for creative exploration through code", source: "Geanna" },
  { text: "colorful coding", source: "Renata" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(10, 255, 10);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(180, 250, 250); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLD);
  textFont('Courier New');
  text("'" + current.text + "'", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}
