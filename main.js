var borboletaX = 0;
var borboletaY = 0;
var borboleta = ""

var florX = 0;
var florY = 0;
var flor = ""

var flor2X = 0;
var flor2Y = 0;
var flor2 = ""

function preload(){
    borboleta = loadImage('borboleta-removebg-preview.png');
    flor = loadImage('flor-removebg-preview.png');
    flor2 = loadImage('flor-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(650, 650);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(650, 650);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoad);
    poseNet.on("pose", gotPoses);
}

function modelLoad(){
    console.log("modelo carregado")
}

function TirarFoto(){
    save("fotoComFiltro.png");
}

function gotPoses(results){
console.log(results)
if(results.length > 0){
    borboletaX = results[0].pose.nose.x;
    borboletaY = results[0].pose.nose.y;
    florX = results[0].pose.rightEye.x;
    florY = results[0].pose.rightEye.y;
    flor2X = results[0].pose.leftEye.x;
    flor2Y = results[0].pose.leftEye.y;
}
}

function draw(){
    image(video, 0, 0, 650, 650);
    image(borboleta, borboletaX-30, borboletaY-30, 60, 60);
    image(flor, florX-25, florY+50, 30, 30);
    image(flor2, flor2X-20, flor2Y+50, 30, 30);
}