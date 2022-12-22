img = "";
status ="";
objects = [];


function preload(){
    img=loadImage('Bottles.jpg');

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

    fill("#FF674D");
    text("Bottles", 45, 75);
    noFill();
    stroke("#FF674D");
    rect(30, 80, 570, 320);

}