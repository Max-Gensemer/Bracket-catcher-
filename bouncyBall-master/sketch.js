const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,cup,wall1,walll2,wall3;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    wall1 = createSprite(200,380,150,20);

    wall2 = createSprite(100,380,0,100);

    wall3 = createSprite(290,380,0,100);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = new  Dog(200,200,50,50);

    cup = new Dog(240,50,50,50);

    
    

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ball.red();
    cup.red();
    wall1.shapeColor=("red");
    wall2.shapeColor=("red");
    wall3.shapeColor=("red");

   drawSprites();
}