/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates keypoint tracking of facial features on live video through ml5.faceMesh.
 */

let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

async function setup() {
  createCanvas(640, 480);

  faceMesh = await ml5.faceMesh(options);

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

function draw() {
  // draw the webcam video
  image(video, 0, 0, width, height);

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
      let lips = face.lips; //declare the lip area
       
      push(); 
      stroke(0); 
      strokeWeight(10); 
      ellipse(face.lips.x+ 35,face.lips.y,60,PI,PI);

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
      rect(face.leftEyebrow.x,face.leftEyebrow.y,80,50,20);
      rect(face.rightEyebrow.x,face.rightEyebrow.y,80,50,20);
      //use snippet for drawing glasses https://editor.p5js.org/haiyiii/sketches/rJ1NREEqZ
      line(face.rightEyebrow.x+32,face.rightEyebrow.y,face.leftEyebrow.x+50,face.leftEyebrow.y);
      pop(); 

      
    }

  }
}

function gotFaces(results) {
  faces = results;
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

