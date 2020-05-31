var car;
var t;
var g;
function setup() {
  createCanvas(300,700);
  g = new Group();
  car = createSprite(150,580,50,50);
  car.addImage("car.png",car_Image);
  car.scale = 0.3; 
}
function preload(){
  car_Image = loadImage("car.png");
  t1_Image = loadImage("t1.png");
}
function keyPressed(){
  if(keyDown(LEFT_ARROW)){
    car.velocityX = -5;
  }
  if(keyDown(RIGHT_ARROW)){
    car.velocityX = +5; 
  }
}
function draw() {
  background("white");
  text(mouseX + ',' + mouseY, 10, 15);
  if(World.frameCount % 100 === 0) {
   t1 = createSprite(random(50,350),-20,50,50);
   t1.velocityY = 3;
   t1.addImage("t1.png",t1_Image);
   t1.scale = 0.1;
   g.add(t1);
  }
  if(car.collide(g)){
    car.destroy();
  }
  drawSprites();
}