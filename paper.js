class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic : false,
          restitution : 0.2,
          friction: 1,
          density : 1
      }
//this.image = loadImage("images/paper1.png");
this.x=x;
this.y=y;
this.r=70;
this.image = loadImage("paper1.png");

this.body=Bodies.circle(this.x, this.y,(this.r-20)/2, options);
World.add(world, this.body);
} display()
{ 
var paperpos=this.body.position; 
push()
translate(paperpos.x, paperpos.y);
rectMode(CENTER)
fill(255) 
imageMode(CENTER)
image(this.image,0,0,this.r,this.r) 
pop() } 
}
