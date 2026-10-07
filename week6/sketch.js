// clock that takes your computer time works in p5.js web editor

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
*/


