// clock that takes your computer time works in p5.js web editor
/*
let ms, s, m , d, mo, y;
//miliseconds, seconds, minutes, day, month, year
let ps;



function setup(){
    canvas = createCanvas(400,400);
}

function draw() {
   background(220);
   fc = frameCount;
    s = second();
    m = minute();
    h = hour();

    if(ps != s){
    console.log(h + ' hour: ' + m + ', minute: ' +  ', second: ' + s);
    }
    ps = 5;// prints at a slower pace per frame
}
//time on my computer will show

//slider

let slider;

function setup(){
    createCanvas(400,400);
    slider = createSlider(0, width, width/2)
    slider.position(10,20);
}

function draw(){
    background(220);
    let x = slider.value();
    ellipse(x,height/2, 50,50);
}

//creating a slider for red, blue, green, and alpha to change the color of the ellipse
/* the code vscode gave me//

let rSlider, gSlider, bSlider, aSlider;

function setup(){
    createCanvas(400,400);
    rSlider = createSlider(0, 255, 100);
    gSlider = createSlider(0, 255, 100);
    bSlider = createSlider(0, 255, 100);
    aSlider = createSlider(0, 255, 100);

    rSlider.position(10,20);
    gSlider.position(10,50);
    bSlider.position(10,80);
    aSlider.position(10,110);
}

function draw(){
    background(220);
    let r = rSlider.value();
    let g = gSlider.value();
    let b = bSlider.value();
    let a = aSlider.value();

    fill(r,g,b,a);
    ellipse(width/2,height/2, 50,50);
}
accessibility screen readers
can make distinct units of your sketch vs. on a web page
using html and css like a remote control for your sketch 
edit things according to viewport

//html color name website
- https://www.w3schools.com/tags/ref_colornames.asp


//he amde a code that when you type in a color name it prints out the color

myButton = createButton('click me');
myInput = createInput('type a color');
myInput.position(20,20);

myButton.position(25+ myInput.width, 20);
//callback function when button is clicked
myButton.mousePressed(changeColor); // when clicked my button dot mouse pressed is the

//callback function that will change the color of the background to whatever is typed in the input box
function changeColor()
{
    backgroundColor = color(myInput.value());
}

//callback function when input is typed in
function typing(){
    stuff = this.value();
}
*/
//can mov things out viewpoint of browser not just the canvas
//girl if you don
//now you can stick something inside of it instead of creating things inside just want to position ones not hardcorde


//objects - key value pairs separated by commas
//can stick this object in whatver sktech you want to makje a portab

//can make an array of objects (frutiger metro and aero)
//for loop populating an array with objects 

/*

let ball = {
    x:100,
    y:200,
    diam:100
}

function setup(){
    createCanvas(800,600);
    background(220);

    ellipse(ball.x, ball.y, ball.diam, ball.diam);

    ball1.x += random(-5,5);
    //makes new objects with the same contraints but different values
}

let oneBall = {
    x:random(width),
    y:random(height),
    diam:random(10,50),
    h:(i/numBalls)*365
}
    balls.push(oneBall); //pushes the object into the array each element in the array is an object
    //values to describe or sketch the things i'd like to draw repeatedbly
    */

    //refere to a particular reference of an object (another version of the object)

    //if it's this rectangle, do this
    //if it's this rectangle do that
    //return sends value back to prorgam whether or not you use it
    //return yes, can return length, can return math, can return all these values
    //this makes so much more sense to write an algortihm out omg
    //cn return string to saw what shape it is

    //i want to make ghostly angels that develop wings depending on the angel number 
    //each section creates a wing to make a distored biblically computationally unique angel
/*
//Algorithm for angel clock
    //what angel numbers did you see today
    //1)enter where, enter what the number was
    //2) saves the value of the angel number, the location, and caluates the time and date for it
    //3) the angel number is stored in an array of objects with the time and date and location
    //4) the angel number is then used to create a wing shape that is unique to that angel number
    //5) the wing shape is then drawn on the canvas at the horizontal clock i've made of the angel numbers
    //6) tha angels move down nd i use p5js to create glitter
    //7) the objects are angels
    //8 you can search for an angel by zooming out and seeing it across the horizontal clock of the year, also
    //9 it goes on an infinite scroll starting the day you place the values and stores them to the right each time you input it
    //10 if you click on the angel: it will display stored data about its origns and where you were
    //maybe something in the algorithm also takes the strings of the angel number location or time to contrubute to how it looks
    //talk to Bo



]// STEP ONE: take in input from the user

//with p5js 2.0 there is a particular syntax with async and await
//function preload() {
  //  MarshaEdit = loadImage("Media/MarshaScreenshot.jpg");
//}

*/


let nameInput; //name enter field assign as global variable
let locationInput;
let angelNumberInput; //angel number assign as global variable
//I want to make text shaped like angel wings along
let radiusOfShape = 200;
let MarshaEdit;
let hLength = 60;
let mLength = 75;
let sLength = 100;

let uniqueAngel; //value to create unique angel drawing

let noiseVal;
let seed;
let n;
let offset = 1; //noise shifted
let x1; 
let y1;
let x2;
let y2;
let x3; 
let y3;
let x4; 
let y4;

//create arguments set all to noise map


function setup(){
    createCanvas(windowWidth,windowHeight);
    angleMode(DEGREES); //changes it for marks based on a 360 increments ssphere (a clock)
    noiseSeed(seed); //add noise var

    nameInput = createInput(); //creates an input box for the user to enter their name
    nameInput.attribute('placeholder', 'Enter your name here'); //adds a placeholder to the input box
    nameInput.position(100, 120); //positions the input box on the canvas in an offcentered way
    nameInput.size(100); //sets the size of the input box

    locationInput = createInput(); //creates an input box for the user to enter their location
    locationInput.attribute('placeholder', 'Enter your location here'); //adds a placeholder to the input box in an offcentered way
    locationInput.position(100, 170); //positions the input box on the canvas
    locationInput.size(100); //sets the size of the input box

    angelNumberInput = createInput(); //creates an input box for the user to enter their angel number
    angelNumberInput.attribute('placeholder', 'Enter angel number here'); //adds a placeholder to the input box in an offcentered way
    angelNumberInput.position(100, 220); //positions the input box on the canvas
    angelNumberInput.size(100); //sets the size of the input box
}

function draw(){
    background(300);
    textSize(30);
    noFill(); //makes the text lightblue outlined with with in sharp bubble letters for the angel theme
    stroke("lightblue"); //makes the stroke light blue 
    
    strokeWeight(1); //establioshes stroke thickness
    text("Hello, my symbolic friend!" , 20, 50); //creates a text box at the top of the canvas in light blue color
    text("Please enter the angel number you saw today <3 " , 20, 100)
    let name = nameInput.value(); //gets the value of the name input box
    let location = locationInput.value(); //gets the value of the location input box
    let angelNumber = angelNumberInput.value(); //gets the value of the angel number input box

    let s = second();
    let m = minute();
    let h = hour();

    function drawNoise(){

    let s = second();
    let m = minute();
    let h = hour();

    x1 = noise(offset+5) * width;
    y1 = noise(offset+10) * height;
    x2 = noise(offset+15) * width;
    y2 = noise(offset+20) * height;
    x3 = noise(offset+25) * width;
    y3 = noise(offset+30) * height;
    x4 = noise(offset+35) * width;
    x4 = noise(offset+40) * height;
    offset = offset + 0.1; //increment offset

    bezier(x1, y1, x2, y2, x3, y3, x4,8);
    //bezier(x1i, x2*i, x3*i, x4*i, y1*i, y2*i, y3*i, y4*i);

    //noise is values 0 to 1, so need another value to increase the noise
    }


    

    function drawDigitalClock(){ //function to organize the digital clock section
        
    let s = second();
    let m = minute();
    let h = hour();

        // noStroke();
        text(h + ":" + m + ":" + s, 20, 450); //centering the clock text that has a live clock to be at the top of the abstract clock
        
    }

    function drawArcClock(){

        strokeWeight(8);
        stroke("lightblue");
        noFill();
        //seconds clock

        let s = second();
        let m = minute();
        let h = hour();

        let end = map(s, 0, 60, 0, 360);
        rect(width/2,height/2,-200,-200,0,200); //outer shape
        rect(width/2,height/2,-250,-50,0,250); //wing shape
        rect(width/2,height/2,-150,-150,0,end); //inside shape
        //triangle(width/2,height/2,-380,-380,0,end); //forms wing shape for my clock angel
       // for(i = 0; i < 20; i++){
        arc(width/2,height/2, 200, 200,0,end); 
        //}
       // triangle(width/2,height/2,100,100,0,end); //forms wing shape for my clock angel
        rect(width/2,height/2,150,150,0,end); //inside shape
        //triangle(width/2,height/2,100,100,0,end); //i made one wing 
        rect(width/2,height/2,200,200,0,200); //outer shape
        rect(width/2,height/2,250,50,0,250);

        //minutes clock
        stroke("pink");
        let end2 = map(m, 0, 60, 0, 360);
       // for(i = 0; i < 15; i++){
        arc(width/2,height/2, 180, 180,0,end2); 
        //triangle(width/2,height/2,-380,-380,0,end2);
    

        //hours clock
        stroke("purple");
        let end3 = map(h, 0, 24, 0, 360);
        //for(i = 0; i < 10; i++){
        arc(width/2,height/2, 160, 160,0,end3); 
        //triangle(width/2,height/2,300,300,0,end3);
         //triangle(width*2,height*2,-400,-400,0,70);
    }
        
    text("Name: " + name, 20, 300); //displays the name entered by the user
    text("Location: " + location, 20, 350); //displays the location entered by the user
    text("Angel Number: " + angelNumber, 20, 400); //displays the angel number entered by the user  



    drawDigitalClock();
   // drawArcClock();
    drawNoise(); //the noise function is stopping my clock from working sigh
    

   // length1 = nameInput.length();
    //length2 = locationInput.length();
    //length3= angelNumberInput.length();

    //uniqueAngel = length1+length2+length3 + s + m + h; 
    //the length of the inputs plus the calculation of the time to create an angel


}

        //does a live calculator of the angel number you got (make it even easier)
        //angels i've seen since making this code
        //geanna 5:55 in sunset park brooklyn nyc 



        //coding issues: making an opposite facing wing
        //putting my image as the background for the clock
        
        //draws animated clock: The Coding Train tutorial code

        //rect(width/2,height/2,300,300,0,end); //when i do rect it kinda looks like an angel wing itself
        //map the number of seconds to the arc 

        //circle(width/2,height/2,300,300);
        //stroke("lightblue", 100, 250);

       /* strokeWeight(4);
        stroke(255,100,150);
        let end = map
        arc(width/2,height/2,300,300,0,360); //draw circle from 0 to 360 degrees 
        //shows the other colored arc within the circle
        


    translate(width/2, height/2);
    rotate(-90);
    cirlce(width/2, height/2, 250, 250);

    let end = map(s, 0, 60, 0, 360);
    let end2 = map(m, 0, 60, 0, 360);
    let end3 = map(h-12, 0, 12, 0, 360);

    let = hx = hLength*cos(end);
    let = hy = hLength*sin(end);
    let = mx = mLength*cos(end2);
    let = my = mLength*sin(end2);
    let = sx = sLength*cos(end3);
    let = sy = sLength*sin(end3);

    line(width/2, height/2, hx, hy);
    ellipse(hx, hy, 20, 20);
    line(width/2, height/2, mx, my);
    ellipse(mx, my, 20, 20);
    line(width/2, height/2, sx, sy);
    ellipse(sx, sy, 20, 20);

*/




    //lineClock();

   // fill("lightblue");
   // circle(width/2, height/2, radiusOfShape*2, radiusOfShape*2); //draws a circle in the center of the canvas with the specified radius
    //image(MarshaEdit, 500,300);
    //image(MarshaEdit, width / 2, height / 2, radiusOfShape * 1.5, radiusOfShape * 1.5);
   //image works, but isn't showing up, just covering the next circle,
    //circleMode(CENTER);

    //i want the input to store and calcluate behind the scenes to form the components of the abstract clock
    //i want each orignal angel to populate the inside of the abstract clock as it relates to the time the data is entered, the name, the location, and the angel number

    
    //lineClock();

//to make it easier what i can do is make it store the angel numbers i see for the hour, minute, second of the day and it populates over the course of each day since it's a day clock\


//testing out await loadImage
/*


    let s = second();
    let m = minute();
    let h = hour();

    fill("lightblue");
    noStroke();
    text(h + ":" + m + ":" + s, 10, 200);


let MarshaEdit; 
// Single async setup function in p5.js v2 
async function setup() { 
    createCanvas(windowWidth, windowHeight); 
    MarshaEdit = await loadImage("Media/MarshaScreenshot.jpg");
    imageMode(CENTER);
}

function draw(){
    background(220);
    image(MarshaEdit, width / 2, height / 2, 500,300);
}


function draw(){
 randomSeed(seed);
    noiseSeed(seed);
    background(220);
}

   

*/