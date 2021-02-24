const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1;
var ball;
var sling;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(400,300,50,50);
    box2 = new Box(400,300,50,50);
    box3 = new Box(400,300, 50, 50);
    box4 = new Box(400,300, 50, 50);
    box5 = new Box(400,300, 50, 50);
    box6 = new Box(450,300, 50, 50);
    box7 = new Box(450,300, 50, 50);
    box8 = new Box(450,300, 50, 50);
    box9 = new Box(450,300, 50, 50);
    box10 = new Box(450,300, 50, 50);
    
    
    ground = new Ground(100,height,1500,20)
    var balloption = {
    isStatic: true

    }
    ball = Bodies.circle(100, 300, 40, balloption) 
    World.add(world, ball)
    sling = new slingShot(ball.body, {x : 75, y : 100})
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
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
    ground.display();


    ellipseMode(RADIUS)
    ellipse(ball.position.x, ball.position.y, 40, 40)
    sling.display(); 
}