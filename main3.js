img = "";
status ="";
objects = [];


function preload(){
    img=loadImage('Fan.jpg');

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

    fill("#3F0D12");
    text("Fan",50,95);
    noFill();
    stroke("#3F0D12");
    rect(10, 100, 480, 350);

}