function setup(){

    video = createCapture(VIDEO);
    video.size(550, 500);
    
    canvas = createCanvas(550, 500);
    canvas.position(660, 150);
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    
    function draw(){
    
    background('#ceced6');
    
    }
    
    function modelLoaded(){
    
    console.log("wow it works");
    
    }
    
    function gotPoses(results){
    
    if(results.length > 0){
        console.log(results);
    }
    }