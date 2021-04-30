var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation1, carAnimation2, logAnimation, playerAnimation;
var school;
function preload(){
  carAnimation1 = loadAnimation("car1.png");
  carAnimation2 = loadAnimation("car2.png");
  playerAnimation = loadAnimation("Player-03.png");
  logAnimation = loadAnimation("log2.png");
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();

  

  for(var i=0;i<6;i++) {
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    bottomGrass1.shapeColor = "green";
    //adding road
    if(i%2 == 0){
      var road = createSprite(683,height-50-(i*400)-grassHeight,width,300)
      road.shapeColor = "black";
    }
  }
   
  // to create rows of cars:
  for(var i = 0; i < 40; i++){
    cars = new Car(2);
    carGroup1.add(cars.spt)
  }
  // to create rows of logs:
  for(var i = 0; i < 40; i++){
    logs = new Logs(-3);
    logGroup1.add(logs.spt)
  }
  player = new Player(width/2,height-25);

 }

function draw() {
  background("skyblue");

  translate(0,-player.spt.y+height-150);
  
  for(i = 1;i<logGroup1.length;i++){
    if(logGroup1[i].x<0){
      logGroup1[i].x = width;
    }
  }

  for(i = 1;i<carGroup1.length;i++){
    if(carGroup1[i].x<0 || carGroup1[i].x>1366){
      carGroup1[i].x = width;
    }
  }
 
  // keyPressed();
  

  drawSprites();
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    player.move(0,-2);
  }
  else if(keyCode == DOWN_ARROW){
    player.move(0,2);
  }
  else if(keyCode == LEFT_ARROW){
    player.move(-2,0);
  }
  else if(keyCode == RIGHT_ARROW){
    player.move(2,0);
  }
}