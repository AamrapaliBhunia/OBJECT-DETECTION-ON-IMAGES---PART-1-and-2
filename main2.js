img = "";
status ="";
objects = [];


function preload(){
    img=loadImage('temple_humans.jpg');

}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error,results){

    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img,0,0,640,420);

    if(status != "")
    {

    }

    fill("#074F57");
    text("Temple",50,30);
    noFill();
    stroke("#074F57");
    rect(50, 30, 550, 370);

    fill("#1c1f33");
    text("Humans", 320,160);
    noFill();
    stroke("#1c1f33");
    rect(320, 170, 120, 200);

    
}