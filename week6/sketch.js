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


