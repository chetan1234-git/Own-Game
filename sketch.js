
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Tom,Tom_Img;
var border1,border2,border3,border4;
var Island_img;
var invisibleGround,invisibleGround2;
var Bison,Bison2,Bison_img;
var Lion,Lion_img;
var Bear,Bear_Img;
var Boat,Boat_Img;
var water;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload()
{
 Tom_img = loadImage("Tom.png");	
 Island_img = loadImage("Island.png")
 Bison_img = loadImage("Bison.png")
 Lion_img = loadImage("Lion.png")
 Bear_Img = loadImage("Bear.png")
 Boat_Img = loadImage("Boat.png")
}

function setup() {
	createCanvas (1365,650);

    border1 = createSprite(1,1,5000,10)
	border1.shapeColor = "black";

	border2 = createSprite(1,650,5000,10)
	border2.shapeColor = "black";

	border3 = createSprite(4,1,8,5000)
	border3.shapeColor = "black";

	border4 = createSprite(1365,650,10,5000)
	border4.shapeColor = "black";
	
	invisibleGround = createSprite(100,610,2200,10);
	invisibleGround.visible = false;

	invisibleGround2= createSprite(300,300,2200,10);
	invisibleGround2.visible = false;
    
    Lion = createSprite(200,570)
	Lion.addImage(Lion_img);
	Lion.velocityX = -2;

	Bison = createSprite(500,570);
	Bison.addImage(Bison_img);
	Bison.scale = 0.3;
	Bison.velocityX = -2;

	Bison2 = createSprite(800,570);
	Bison2.addImage(Bison_img);
	Bison2.scale = 0.3;
	Bison2.velocityX = -2;

	Bear = createSprite(1100,570);
	Bear.addImage(Bear_Img);
	Bear.scale = 0.3;
	Bear.velocityX = -2;
	Bear.scale = 1.40;

	water = createSprite(1300,570,150,150)
	water.shapeColor = "aqua";

	Boat = createSprite(1290,570);
	Boat.addImage(Boat_Img);
	Boat.scale = 1;

	Tom = createSprite(30,570);
	Tom.addImage(Tom_img);
	Tom.scale = 0.6;
   
	AnimalsGroup = new Group();

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(Island_img);

if (gameState ===PLAY){
 
  if(keyDown("space")&& Tom.y >= 450) {
	Tom.velocityY = -14;
  }
  if(keyDown("Right")) {
	Tom.velocityX = 2;
  }
  if(keyDown("Left")) {
	Tom.velocityX = -2;
  }
	
	Tom.velocityY = Tom.velocityY + 0.8

  Tom.collide(border1);
  Tom.collide(border2);
  Tom.collide(border3);
  Tom.collide(border4);
  Tom.collide(invisibleGround);
  Tom.collide(invisibleGround2);
}
if (gameState ===END){
  if (Lion.isTouching(Tom)||
      Bison.isTouching(Tom)||
	  Bison2.isTouching(Tom)||
	  Bear.isTouching(Tom) 
	  ){

		Lion.setVelocity(0,0);
		Bison.setVelocity(0,0);
		Bison2.setVelocity(0,0);
		Bear.setVelocity(0,0);
		Tom.setVelocity(0,0);
  }

  if(Boat.isTouching(Tom)){
	stroke("black");
	fill("red");
	textSize(100);
	text('You Won',250,200);
	Lion.setVelocity(0,0);
	Bison.setVelocity(0,0);
	Bison2.setVelocity(0,0);
	Bear.setVelocity(0,0);
	Tom.setVelocity(0,0);  
  }
}
  drawSprites();
 
}
