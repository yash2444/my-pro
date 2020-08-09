class Paper{
  constructor(){
      var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
     this.body = Matter.Bodies.circle(50,610,23,options);
     World.add(world,this.body);
     this.image=loadImage("sprites/paper.png")
  
    }

  display(){
    
      ellipseMode(RADIUS)
      ellipse(this.body.position.x,this.body.position.y,23,23);
      image(this.image, this.body.position.x-30, this.body.position.y-35, 65, 65);
   
  }
}