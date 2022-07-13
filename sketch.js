
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var ground, court;
var canvas, angle, player;
var score = 0;
var balls = [];

function preload() {
  court = loadImage("images/BasketballCourt.png");
  playerImg = loadImage("images/player1.png");
}

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
   
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(0, height-1, width*2, 2, ground_options);
  World.add(world,ground);

  player = Bodies.rectangle(50, 450, 50, 60, ground_options);
  World.add(world, player);

  cannon = new Cannon(600, 250, 10, 30);

 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  image(court, 0,0,width, height);
  Engine.update(engine);
  
  
  rect(ground.position.x,ground.position.y,400,20);
  push();
  imageMode(CENTER);
  image(playerImg, player.position.x, player.position.y, 150, 300);
  pop();

  for(var i = 0; i<balls.length;i++){
    showBall(balls[i]);
  }
  
  cannon.display();
  
  
 
}

function showBall(ball) {
  if(ball) {
    ball.display();
  }
}

function keyPressed() {
  if(keyCode === 32) {
    var ball1 = new Ball(cannon.x, cannon.y);
    ball1.trajectory = [];
    Matter.Body.setAngle(ball1.body, cannon.angle);
    balls.push(ball1);
  }
}