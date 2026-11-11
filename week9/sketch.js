//move net body
//organizes the body with points and comes back in a big array to organize the body
//tells us how confident sketch is 
/*
let faceMesh;
let video;
let faces = []; //array for faces
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

async function setup() {
  createCanvas(800, 600);
  
  // Load the faceMesh model asynchronously
  faceMesh = await ml5.faceMesh(options); //this is the face mesh
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(800, 600);
  video.hide();
  
  // Start detecting faces from the webcam video
  faceMesh.detectStart(video, gotFaces);
}

function mousePressed(){
  console.log(faces); //logs info for faces
  // console.log(keypoint); //logs info for faces
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  //the coding train video example
  if(faces.length > 0) {
    for (let face of faces){ //loops through all the points
   // let face = faces[0];
    //let keypoint = faces.keypoints[19];
      for(let i = 0; i < face.keypoints.length; i++){
        let keypoint = face.keypoints[i];
        fill(255, 255, 0); //color of keypoints
        noStroke();
        rect(keypoint.x, keypoint.y, 4); //changes the shape of each keypoint for face
        //displays all the keypoints if the length of the face is greater than 0/ if present on the screen
      
      }
     }
    }
  }
  

  // id we have only one face, draw the eyes
  /*
  if(faces.length == 1) {
    let leftEye = faces[0].leftEye.keypoints;
    let rightEye = faces[0].rightEye.keypoints;
    fill(255);
    stroke(0);
    // draw left eye
    // i know the eyes have 17 keypoints each
    beginShape();
    for(let i = 0; i<8;i++){
      vertex(leftEye[i].x,leftEye[i].y);
    }
    for(let i = 16;i>7;i--){
      vertex(leftEye[i].x,leftEye[i].y);
    }
    endShape();
    // draw pupil

    // draw right eye
    beginShape();
    for(let i = 0; i<8;i++){
      vertex(rightEye[i].x,rightEye[i].y); //saves each point of the facial section to begin the shape around the mesh
    }
    for(let i = 16;i>7;i--){
      vertex(rightEye[i].x,rightEye[i].y); //saves each point of the facial section to begin the shape around the mesh
    }
    endShape();
    // draw pupil
    fill(150, 0, 0);
    */
   // noStroke();
    //eye ellipse(faces[0].leftEye.centerX, faces[0].leftEye.centerY, 8,8);
    // eye ellipse(faces[0].rightEye.centerX, faces[0].rightEye.centerY, 8,8);
  //}
/*

// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
  // console.log(faces);
}

*/

/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates keypoint tracking of facial features on live video through ml5.faceMesh.
 */
//Millenial Optimism Facial Recongition

let faceMesh;
let video;
let faces = [];
let lipsExterior;
let song;
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };


async function setup() {
  createCanvas(640, 480);

//song = await loadSound ("MillennialOptimism.mp3");
  //sound not working

  faceMesh = await ml5.faceMesh(options);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
  //tint("yellow");
 // filter(BLUR);
}

function draw() {
  // draw the webcam video
  image(video, 0, 0, width, height);

  function Sundraw(){
    fill("yellow");
    stroke("orange");
    strokeWeight(20);
    circle(50, 50, 200);
    text('😆',10,100);
      textSize(100);
  }
    function Moondraw(){
      fill("255");
      stroke("darkblue");
      strokeWeight(20);
      circle(50, 50, 200);
      text('😞',10,100);
      textSize(100);
  }


    // are the lips close together?
   // if(dist(lipMovetop, lipMovebtoom,10,10)<30){
    //  tint("yellow", 5);
   // }
    
    // draw the index and thumb


    // draw the faces' bounding boxes
  for (let j = 0; j < faces.length; j++) {
    let face = faces[j];

    strokeWeight(5);
    // draw the lips
    stroke(255, 0, 255);
    for (let i = 0; i < face.lips.keypoints.length; i++) {
      let keypoint = face.lips.keypoints[i];
      let x = keypoint.x;
      let y = keypoint.y;
      point(x, y);
    }
   
    // draw the left eye
    stroke(255, 255, 0);
    for (let i = 0; i < face.leftEye.keypoints.length; i++) {
      let keypoint = face.leftEye.keypoints[i];
      let x = keypoint.x;
      let y = keypoint.y;
      point(x, y);
    }
    // draw the left eyebrow
    stroke(0, 255, 0);
    for (let i = 0; i < face.leftEyebrow.keypoints.length; i++) {
      let keypoint = face.leftEyebrow.keypoints[i];
      let x = keypoint.x;
      let y = keypoint.y;
      point(x, y);
    }
    // draw the right eye
    stroke(0, 255, 255);
    for (let i = 0; i < face.rightEye.keypoints.length; i++) {
      let keypoint = face.rightEye.keypoints[i];
      let x = keypoint.x;
      let y = keypoint.y;
      point(x, y);
    }
    // draw the right eyebrow
    stroke(0, 0, 255);
    for (let i = 0; i < face.rightEyebrow.keypoints.length; i++) {
      let keypoint = face.rightEyebrow.keypoints[i];
      let x = keypoint.x;
      let y = keypoint.y;
      point(x, y);
    }

      
 // Inside your draw() loop: 
    if (faces.length > 0) { // 1\. Grab the first face object from the faces array 
      let face = faces[0];// 2\. Extract the eye objects safely 
      let faceOval = face.faceOval; //declare the face oval area
       
      push(); 
      stroke(15); 
      strokeWeight(10); 
      noFill();
      //ellipse(face.lips.x+ 35,face.lips.y,60,PI,PI);
      //not working curveVertex(face.lips.x,face.lips.y);
     // beginShape();
      //vertex(150,250);
      //arc(face.faceOval.x+35,face.faceOval.y, 40, 20, PI, 0);
      //let a = face.keypoints[];
     // let y = 26;

     // fill(133,94,66);
      fill(0);
      ellipse(face.faceOval.x+60,face.faceOval.y+8, 250, 70, 0);   
      fill(0);
      //fill(133,94,66);
       rect(face.faceOval.x + 10,face.faceOval.y-60, 100, 70, 15, 15);   
    // arc(face.faceOval.x+60,face.faceOval.y,80,80,20);
     // line(face.faceOval[x], face.faceOval[y], 80, 400);
      //makes upside down arc for moustache
      //endShape(CLOSE);
      //i decided to look up the points of the face to figure out where to place each part of the face mask facial landmarks
      
      pop();
 
    }

    
 // Inside your draw() loop: 
    if (faces.length > 0) { // 1\. Grab the first face object from the faces array 
      let face = faces[0];// 2\. Extract the eye objects safely 
      let lips = face.lips; //declare the lip area

    let topLip = face.keypoints[13];
    let bottomLip = face.keypoints[14];
  fill(0, 255, 255); //light blue and purple indicator
  stroke("purple");
  circle(topLip.x,topLip.y,16);
  circle(bottomLip.x,bottomLip.y,16);

   // are the fingers close together?
    if(dist(topLip.x, bottomLip.y, topLip.y, bottomLip.x)>100){ //if the distance is a certain length, then the millennial optimism will turn on
      filter(POSTERIZE, 5);
      tint("yellow");
     // if(!song.isPlaying()){
     // song.play(); //play 
      //isPlaying = true;
      //}
      //video.play();
      //millenial optimism song
      Sundraw();
    }
    else{
      noTint(); //tint was being weird
      //song.stop(); //stop playing music
      Moondraw();
     // song.pause();
     // isPlaying = false;
    }
      //took snippet from class code to do testing of distance between keypoints

      //code from face emsh from the coding train for top and bottom lip
  
       
      push(); 
      stroke(0); 
      strokeWeight(10); 
      noFill();
      //ellipse(face.lips.x+ 35,face.lips.y,60,PI,PI);
      //not working curveVertex(face.lips.x,face.lips.y);
        arc(face.lips.x+35,face.lips.y, 40, 20, PI, 0); //makes upside down arc for moustache

      pop();
 
    }

 // Inside your draw() loop: 
    if (faces.length > 0) { // 1\. Grab the first face object from the faces array 
      let face = faces[0];// 2\. Extract the eye objects safely 
      let leftEye = face.leftEyebrow; //declare both eyes
      let rightEye = face.rightEyebrow;
     
      push(); 
      stroke(0); 
      strokeWeight(3); 
      noFill();
      //doing it at the eyebrows makes it look more accurate than on the top of the eyes
      
      rect(face.leftEyebrow.x,face.leftEyebrow.y,70,50,25);
      rect(face.rightEyebrow.x,face.rightEyebrow.y,70,50,25);
      //use snippet for drawing glasses https://editor.p5js.org/haiyiii/sketches/rJ1NREEqZ
      line(face.rightEyebrow.x+32,face.rightEyebrow.y,face.leftEyebrow.x+50,face.leftEyebrow.y);
      pop(); 

      
    }

  }
  
}


function gotFaces(results) {
  faces = results;
}


