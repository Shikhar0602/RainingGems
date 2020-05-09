const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;




function preload() {

}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

      blue1 = new Blue();
      blue2 = new Blue();
      blue3 = new Blue();
      blue4 = new Blue();

      green1 = new Green();
      green2 = new Green();
      green3 = new Green();
      green4 = new Green();

      purple1 = new Purple();
      purple2 = new Purple();
      purple3 = new Purple();
      purple4 = new Purple();

      red1 = new Red();
      red2 = new Red();
      red3 = new Red();
      red4 = new Red();

      white1 = new White();
      white2 = new White();
      white3 = new White();
      white4 = new White();

      yellow1 = new Yellow();
      yellow2 = new Yellow();
      yellow3 = new Yellow();
      yellow4 = new Yellow();


    

  


}

function draw() {
  Engine.update(engine);
  
 
  background(0);  
  blue1.display();
  blue2.display();
  blue3.display();
  blue4.display();

  green1.display();
  green2.display();
  green3.display();
  green4.display();

  purple1.display();
  purple2.display();
  purple3.display();
  purple4.display();

  red1.display();
  red2.display();
  red3.display();
  red4.display();

  white1.display();
  white2.display();
  white3.display();
  white4.display();

  yellow1.display();
  yellow2.display();
  yellow3.display();
  yellow4.display();


}