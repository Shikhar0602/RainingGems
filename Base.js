class Base {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pics/base.png");
        World.add(world, this.body);
        Matter.Body.setVelocity(this.body, {x:0, y:10});
      }
      display(){
        var angle = this.body.angle;
        push();
        if(this.body.position.y>450)
        {
          this.body.position.y = 400-this.body.position.y;
          Matter.Body.setVelocity(this.body, {x:0, y:0})
        }
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}