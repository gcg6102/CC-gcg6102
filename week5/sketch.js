// clock that takes your computer time works in p5.js web editor

let ms, s, m , d, mo, y;
//miliseconds, seconds, minutes, day, month, year
let ps;



function setup(){

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



