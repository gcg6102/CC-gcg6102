let img;


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

async function setup(){
  img = await loadImage('/assets/MarshaScreenshot.jpg');


  
    createCanvas(windowWidth,windowHeight);

        image(img, 0, 0);
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
   // background(300);

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

    x1 = noise(map(offset+5) * width);
    y1 = noise(offset+10) * height;
    x2 = noise(offset+15) * width;
    y2 = noise(offset+20) * height;
    x3 = noise(offset+25) * width;
    y3 = noise(offset+30) * height;
    x4 = noise(offset+35) * width;
    x4 = noise(offset+40) * height;
    offset = offset + 0.1; //increment offset

    bezier(width/2, y1, x2, y2, x3, y3, x4,8);
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

//sources: https://m.youtube.com/watch?v=E4RyStef-gY&pp=ugUEEgJlbg%3D%3D&ra=m
//https://m.youtube.com/watch?v=uctX1P3H3xM&list=PL0beHPVMklwh6-2ohRiaN6wo8ttoWF9JP&index=2&pp=iAQB&ra=m
//I also got help from Bo