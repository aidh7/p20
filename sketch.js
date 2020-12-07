var car,wall 
var speed,weight
function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50);
  car.velocityX=speed
  car.shapeColor='white'

  wall=createSprite(700,200,40,200)
  wall.shapeColor='grey'
}

function draw() {
  background(0);
  if(wall.x-car.x < car.width/2+wall.width/2){
  car.velocityX=0
  var dform=0.5*weight*speed*speed/22500
  if(dform>180){
    car.shapeColor='red'
  }
  if(dform<180 && dform>100){
  car.shapeColor='yellow'
  }
if(dform<100){
  car.shapeColor='green'
}
  }
  drawSprites();
}