//move net body
//organizes the body with points and comes back in a big array to organize the body
//tells us how confident sketch is 

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


// Callback function for when faceMesh outputs data
function gotFaces(results) {
  // Save the output to the faces variable
  faces = results;
  // console.log(faces);
}