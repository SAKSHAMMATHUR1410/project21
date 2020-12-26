var bullet , speed , weight;
var wall , thickness;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83)
  bullet = createSprite(0,200,20,20)
  wall=createSprite(1200,200,thickness,height/2);
  speed = random(223,321)
  weight = random(30,52)
  bullet.velocityX = speed;
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    bullet.x = wall.x-thickness;
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage > 10){
      wall.shapeColor = color(225,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,225,0)
    }
  }
    
   
  drawSprites();
    }
    function hasCollided(bullet,wall){
      bulletRightEdge = bullet.x + bullet.width;
      wallLeftEdge = wall.x;
      if(bulletRightEdge>=wallLeftEdge){
        return true
      }
      return false;
    }
    
  
