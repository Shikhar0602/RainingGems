class Yellow extends Base {
  constructor(){
    super(random(0,800), random(-100,-50), 30, 30);    
    this.image = loadImage("yellow.png");
  }

  display() {
    super.display();
  }
}