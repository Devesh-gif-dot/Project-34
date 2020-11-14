
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	


	Bob1 = new Bob(100,200,50);
	rope1 = new rope(Bob1.body, {x:100,y:100});

	Bob2 = new Bob(200,200,50);
	rope2 = new rope(Bob2.body, {x:150,y:100});
	
	Bob3 = new Bob(300,200,50);
	rope3 = new rope(Bob3.body, {x:200,y:100});
	
	Bob4 = new Bob(400,200,50);
	rope4 = new rope(Bob4.body, {x:250,y:100});

	Bob5 = new Bob(500,200,50);
	rope5 = new rope(Bob5.body, {x:300,y:100});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');

  

  Bob1.display();
  rope1.display();

  Bob2.display();
  rope2.display();
  
  Bob3.display();
  rope3.display();
  
  Bob4.display();
  rope4.display();
  
  Bob5.display();
  rope5.display();
	



  
  drawSprites();
  console.log(Bob5.body)
 
}
function mouseDragged(){
	Matter.Body.setPosition(Bob5.body, {x: mouseX , y: mouseY});
}




