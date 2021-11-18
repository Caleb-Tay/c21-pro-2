
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball ;
var groundObj , leftSide , rightSide ;


function preload()
{

}

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0 ,
		density : 1.2
	}

	ball = Bodies.circle(100,200,30,ball_options);
	World.add(world,ball);

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(500,600,20,120);
	rightSide = new Ground(700,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,30)

  if(keyDown('UP_ARROW')){
	Matter.Body.applyForce(ball,{x : 0,y : 0},{x : 5 ,y : -0.5});
	}

  Engine.update(engine);
}



	

