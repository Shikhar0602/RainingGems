class White extends Base {
  constructor(){
    super(random(0,800), random(-100,-50), 30, 30);    
    this.image = loadImage("white.png");
  }

  display() {
    super.display();
  }
}