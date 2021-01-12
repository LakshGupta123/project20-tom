var background1;
var backgroundImg;
var mice;
var miceImg;
var tom;
var tomImg,tomImg1;


function preload() {
    //load the images here
backgroundImg=loadImage("images/garden.png");
miceImg=loadImage("images/jerryOne.png")
tomImg=loadImage("images/tomOne.png")
tomImg1= loadAnimation("images/tomTwo.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background1= createSprite(500,400,200,200)
background1.addImage(backgroundImg);
mice= createSprite(100,650,50,50);
mice.addImage(miceImg);
mice.scale=0.1;

tom= createSprite(700,650,50,50);
tom.addImage(tomImg);
tom.scale=0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
tom.velocityX=-3;
tom.addAnimation(tomImg)

}




}
