const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
//creating game objects
var computerBase1, playerBase1;
var player1, computer1;

function setup() {
  canvas = createCanvas(1600, 700);

  //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  //Create Player Base and Computer Base Object
  computerBase1 = new computerBase(1300, 400, 0, 0);
  playerBase1 = new playerBase(300,random(400,height-300),180, 150);

  //creating player and computer here
computer1 = new computerPlayer(1280, 230, 50, 50);
player1 = new player(310, playerBase1.body.position.y-170, 50, 180);
}

function draw() {

  background(6, 253, 199);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  computerBase1.display();
  playerBase1.display()

  //display Player and computerplayer
computer1.display();
player1.display();

}
