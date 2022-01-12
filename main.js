nose_y;
nose_x;
moustache="";
function preload(){
moustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function modelloaded(){
    console.log("picture is given to posenet");
}



function gotposes(results){
if(results.length>0){
    console.log(results);
    nose_x= results[0].pose.nose.x-40;
    nose_y= results[0].pose.nose.y;
    
}
}
function draw(){
    image(video,0,0,300,300);
    image(moustache,nose_x,nose_y,80,35);
}
function CaptureImage(){
    console.log("Capturing Image...");
    save('My_Moustache_Filtered_Image.png');
}