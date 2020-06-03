
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper1,ground1,box1,box2,box3,slingshot;
var dustb;

function preload(){
dustbImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	box1 = new Box(900,647,140,25);
	box2 = new Box(823,545,25,200);
	box3 = new Box(977,545,25,200);
	paper1 = new Paper(200,450,40);
	dustb = createSprite(900,545,200,200)
	dustb.addImage(dustbImg);
	dustb.scale = 0.7
	slingShot = new Launcher(paper1.body,{x:200,y:300});

	ground1 = new Ground(width/2,670,width,20)
	ground1.shapeColor=color(255)

	//Create a Ground
	//ground1 = Bodies.rectangle(width/2, 800, width, 100 , {isStatic:true} );
	var render = Render.create({
		element: document.body,
		engine : engine,
		options:{
			width : 1200,
			height : 700,
			wireframes: false
		}

});

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  Engine.update(engine);
  background(22,123,224);
  strokeWeight(4)
	ground1.display(); 
	box1.display();
	box2.display();
	box3.display();
	paper1.display();
	dustb.display();
	slingShot.display();
	
}

function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	slingShot.fly();
	}
