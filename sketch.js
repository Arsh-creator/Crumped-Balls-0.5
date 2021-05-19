const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 480, 800, 20);
	leftSide = new Dustbin(550, 420, 20, 100);
	bottomSide = new Dustbin(610, 460, 100, 20);
	rightSide= new Dustbin(670, 420, 20, 100);
  paper= new Paper(100, 460, 20);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  leftSide.display();
  bottomSide.display();
  rightSide.display();
  paper.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y:-60})
  }
}