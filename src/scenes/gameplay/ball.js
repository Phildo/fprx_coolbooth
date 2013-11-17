var Ball = function(x, y)
{
  this.x = x;
  this.y = y;
  this.width = 10;
  this.height = 10;

  this.xvel = 2;
  this.yvel = 2;

  var speed = 5;
  this.tick = function(ih)
  {
    this.x += this.xvel;
    this.y += this.yvel;
  };

  this.draw = function(canv)
  {
    canv.context.beginPath();
    canv.context.arc(this.x, this.y, this.width/2, 0, 2*Math.PI, false);
    canv.context.fillStyle = 'green';
    canv.context.fill();
    canv.context.lineWidth = 5;
    canv.context.strokeStyle = '#003300';
    canv.context.stroke();
  };

  this.collide = function(thing)
  {
    if(thing.pos !== undefined) //its a wall
    {
      if(thing.pos == "up" || thing.pos == "down")
        this.yvel = -this.yvel;
      if(thing.pos == "left" || thing.pos == "right")
        this.xvel = -this.xvel;
    }
  };
};
