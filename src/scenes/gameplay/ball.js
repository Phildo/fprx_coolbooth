var Ball = function(x, y)
{
  this.x = x;
  this.y = y;
  this.xvel = 2;
  this.yvel = 2;

  var speed = 5;
  this.tick = function(ih)
  {
    this.yvel = (ih.up   ? -1*speed : 0) + (ih.down  ? speed : 0);
    this.xvel = (ih.left ? -1*speed : 0) + (ih.right ? speed : 0);

    this.x += this.xvel;
    this.y += this.yvel;
    //console.log(this.xvel+","+this.yvel);
  };

  this.draw = function(canv)
  {
    canv.context.beginPath();
    canv.context.arc(this.x, this.y, 5, 0, 2*Math.PI, false);
    canv.context.fillStyle = 'green';
    canv.context.fill();
    canv.context.lineWidth = 5;
    canv.context.strokeStyle = '#003300';
    canv.context.stroke();
  };
};
