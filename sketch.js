/*var movingRect , fixedRect, gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "cyan";

  movingRect = createSprite(400,600,80,30);
  movingRect.shapeColor = "cyan";

  gameObject1 = createSprite(200,100,30,30);
  gameObject1.shapeColor = "cyan";

  gameObject2 = createSprite(300,100,30,30);
  gameObject2.shapeColor = "cyan";
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(isTouching(gameObject1,movingRect))
  {
    gameObject1.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }
  else {
    gameObject1.shapeColor = "cyan";
    movingRect.shapeColor = "cyan";
  }


  drawSprites();
}*/
var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 600,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, fixedRect);
  drawSprites();
}


