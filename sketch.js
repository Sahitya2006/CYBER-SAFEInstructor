var bg,bgImg;
var security,system;
var score=0; 

function preload(){
 bgImg = loadImage("bg.jpg")
 Img = loadImage("1.jpg");
 job = loadImage("jobs.jpg");
 effect = loadImage("effects.png");
 chart = loadImage("chart.png");
 icon = loadImage("ICON.png");
 about = loadImage("about.png");
 quiz = loadImage("quiz.jpg");
 types = loadImage("types.png");
 goldImg = loadImage("GOLD.png");
}
function setup() {
  createCanvas(1520,720);
  background(bgImg);
  security = new Security;
  system = new System;
}

function draw() {
  security.display();
  drawSprites();

fill(255);
textSize(44);
text(score,150,700);

//condition
if (score === 30){
  clear();
  background(goldImg);
  }
}