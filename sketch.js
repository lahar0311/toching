var car,wall

function setup() {
  createCanvas(800,400);
  car=createSprite(700, 200, 20, 20);
  car.shapeColor="pink"
car.velocityX=-5

  wall=createSprite(100,200,50,250)
    wall.shapeColor="red"
}

function draw() {
  background(0,0,0);
  toching()  
  drawSprites();
}


function toching(){
if(wall.x-car.x==car.width/2+wall.width/2){
 car. velocityX=0
 car.shapeColor="red"
}



}