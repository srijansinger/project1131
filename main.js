function preload(){
mustach_pic = loadimage("https://drive.google.com/file/d/1CW0SBWi9iH7QEV7Pai3rThy4sowv3Wcq/view")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, );
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function modelloaded(){
    console.log(Posenet is loaded);
}

function gotposses(results){
    if(results.lenght >0);
    console.log(results);
    console.log("nosex = "+results[0].pose.nose.x);
    console.log("nosex = "+results[0].pose.nose.y);
}

function takesnapshot(){
    save("Snapshot.png");
}















