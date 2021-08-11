const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;


const Constraint = Matter.Constraint;
const Body = Matter.Body; 
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world;

var ball;
var blower;
var blowerMouth;



function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world; 
 
  

 ball=new Ball(400,200,80,80);
 blower=new Blower(600,400,200,200);
 blowerMouth=new Blowermouth(350,450,300,50);

 button=createButton("Click to Blow");
 button.position(width/2,height-100);
 button.class("blowButton");
 button.mousePressed(blow);

}

function draw() {
  background(255,255,255);  

  Engine.update(engine);

  ball.show();
  blower.show();
  blowerMouth.show();
  drawSprites();
}

function blow(){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}