class Box {
    constructor(x, y,height,width) {
      var options = {
        'restitution':0.8,
        'friction':5,
        'density':1.0 
      }
      this.body = Bodies.rectangle(x, y, 20, height,width, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      this.visibility = 255
    }
    display(){
      if(this.body.speed<7){
        rectMode(CENTER);
        rect( this.body.position.x,this.body.position.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body)
      }
        
      
      
    }
  }