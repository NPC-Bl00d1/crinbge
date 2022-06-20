rightWrist = 0;
leftWrist = 0;
difference = 0;

function setup(){

video = createCapture(VIDEO);
video.size(550, 500);

canvas = createCanvas(550, 500);
canvas.position(660, 150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw(){

background('white');

document.getElementById("urcringe").innerHTML = "Size of the font is = " + difference + "px";

stroke('purple')
text("Ishita", 10, 303);
textSize(difference);

}

function modelLoaded(){

console.log("wow it works");

}

function gotPoses(results){

if(results.length > 0){
    console.log(results);


    rightWrist = results[0].pose.rightWrist.x;
    leftWrist = results[0].pose.leftWrist.y;
    difference = floor(leftWrist - rightWrist);
    console.log("left wrist x is " + leftWrist + "right wrist is = " + rightWrist + "difference is " + difference);
}
}