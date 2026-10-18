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
    //talk to Bo if needed on FRIDAYYYY
*/
let nameInput; //name enter field assign as global variable
let angelNumberInput; //angel number assign as global variable
//I want to make text shaped like angel wings along
let radiusOfShape = 200;


// STEP ONE: take in input from the user

function preload(){
    MarshaEdit = loadImage("Media/MarshaScreenshot.jpg")
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    //text("Hello my symbolic friend! Please enter the angel number you saw today", 20, 50); //creates a text box at the top of the canvas in light blue color

   // imageMode(CENTER); //centering my image

    nameInput = createInput(); //creates an input box for the user to enter their name
    nameInput.attribute('placeholder', 'Enter your name here'); //adds a placeholder to the input box
    nameInput.position(100, 100); //positions the input box on the canvas
    nameInput.size(100); //sets the size of the input box

    locationInput = createInput(); //creates an input box for the user to enter their location
    locationInput.attribute('placeholder', 'Enter your location here'); //adds a placeholder to the input box
    locationInput.position(100, 150); //positions the input box on the canvas
    locationInput.size(100); //sets the size of the input box

    angelNumberInput = createInput(); //creates an input box for the user to enter their angel number
    angelNumberInput.attribute('placeholder', 'Enter angel number here'); //adds a placeholder to the input box
    angelNumberInput.position(100, 200); //positions the input box on the canvas
    angelNumberInput.size(100); //sets the size of the input box

}

function draw(){
    background(300);

    fill("lightblue");
    text("Hello my symbolic friend! Please enter the angel number you saw today <3 " , 20, 50); //creates a text box at the top of the canvas in light blue color
    let name = nameInput.value(); //gets the value of the name input box
    let location = locationInput.value(); //gets the value of the location input box
    let angelNumber = angelNumberInput.value(); //gets the value of the angel number input box

    text("Name: " + name, 20, 300); //displays the name entered by the user
    text("Location: " + location, 20, 350); //displays the location entered by the user
    text("Angel Number: " + angelNumber, 20, 400); //displays the angel number entered by the user  

    fill("lightblue");
    circle(width/2, height/2, radiusOfShape*2, radiusOfShape*2); //draws a circle in the center of the canvas with the specified radius
    //image(MarshaEdit, width / 2, height / 2, radiusOfShape * 1.5, radiusOfShape * 1.5);
   //image works, but isn't showing up, just covering the next circle,
    //circleMode(CENTER);
    circle(width/2, height/2, radiusOfShape/20, radiusOfShape/20);
    fill("green");


}


 



