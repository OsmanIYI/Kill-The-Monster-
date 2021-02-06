const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, groundImg;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var ball, ballImg;
var slingshot;
var monsterImg,monster;

function preload()
{
  ballImg = loadImage("Superhero-02.png");
  groundImg = loadImage("GamingBackground.png");
  

}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(600,height,1200,100);
  

  ball = Bodies.circle(50, 200, 10);
  World.add(world, ball);

  slingshot = new Sling(this.ball, {x: 100, y: 200});


  box1 = new Box(525,600,20,20,PI/7);
	box2 = new Box(525,500,20,20,PI/7);
	box3 = new Box(525,400,20,20,PI/7);
	box4 = new Box(545,300,20,20,PI/7);
	box5 = new Box(545,200,20,20,PI/7);
	box6 = new Box(545,100,20,20,PI/7);
	box7 = new Box(545,10,20,20,PI/10);
	box8 = new Box(545,3,20,20,PI/9);
	box9 = new Box(545,2,20,20,PI/5);
	box10 = new Box(545,1,20,20,PI/7);
  box11 = new Box(600,420,20,20,PI/2);
  box12 = new Box(600,320,20,20,PI/2);
  box13 = new Box(600,220,20,20,PI/2);
  box14 = new Box(600,120,20,20,PI/2);
  box15 = new Box(600,20,20,20,PI/2);
  
  monster = new Monster(700,200,40,40);

}

function draw() {
  background(groundImg);  
  Engine.update(engine);
  drawSprites();
  ground1.display();
  
  fill("brown");
  box1.display();
  box2.display();
  box3.display();
  box4.display();  
  box5.display();  
  box6.display();  
  box7.display();
  box8.display();  
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box13.display();

  slingshot.display();

  monster.display(monsterImg);

  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 40, 40);

}

function mouseDragged(){
      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if (keyCode===32){
  slingshot.attach(ball.body)
  }
  }

  function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(this.polygon);
    }
  }




