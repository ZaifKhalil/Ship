var ship, shipImg1;

var seaImg;


function preload(){
  ship = loadAnimation("ship-1.png", "ship-2.png");
  

  
}
function setup(){
  createCanvas(400,400);
  
  ship = createSprite(100,160,20,50); 
  ship.addAnimation(shipImg1);

  
  sea = createSprite(200,180,400,20)
  sea.veloxityX= -4
  sea = loadImage("sea.png");
  sea.addImage(seaImg) 
    
    if(keydown(right_arrow)){
      ship.y = ship.y+4
    }
    if(keydown(left_arrow)){
      ship.y = ship.y-4
    }

  

function draw() {
  background("blue");
 
  if(sea.x < 0){
    sea.x = sea.width/2
    
   
  }


   drawSprites();
 }
}

