class Dustbin1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':1,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/dustbin.png")

  
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
      image(this.image, this.body.position.x, this.body.position.y-50, 210, 100);

    }
  };