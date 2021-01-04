var bullet, wall, thickness;
var bulletSpeed, bulletWeight;

function setup() {
  createCanvas(1600,400);
bullet=createSprite(50,200,50,15);
bullet.shapeColor="white";

wall=createSprite(1400,200,60,height/2);
bulletSpeed=random(223,321);
bullet.velocityX=bulletSpeed;
bulletWeight=random(30,52);
thickness=random(22,83);



}

function draw() {
  background(0);  
 if (collided(bullet,wall)){
   bullet.velocityX=0;
 
   damage=(0.5*bulletWeight*bulletSpeed*bulletSpeed)/(thickness*thickness*thickness);
  if (damage>10){
   bullet.shapeColor="red";
 }
 if (damage<10){
  bullet.shapeColor="green";
} 
}
 drawSprites();

}

function collided(obullet,owall){
  bulletRightEdge=obullet.x+obullet.width;
  wallLeftEdge=owall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }

  
    return false

}