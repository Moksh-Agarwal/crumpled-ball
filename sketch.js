const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var ball;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,395,1200,20);
    box1 = new Box(800,330,20,120);
    box2 = new Box(950,330,20,120);
    box3= new Box(875, 380,150,20);
    ball= new paper(100,390,30,30);
}

function draw(){
    background(0);
    fill("green");
    
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box2.display();
    box1.display();
    box3.display();
    ball.display();
}
function keyPressed()
{
    if(keyCode=== UP_ARROW )
    {
    Matter.Body.applyForce(ball.body, ball.body.pos,{x:75, y:-25.83})
    }
}