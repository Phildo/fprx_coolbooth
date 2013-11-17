var Wall = function(x, y, width, height,pos)
{
  this.x = x;
  this.y = y;
  this.width  = width;
  this.height = height;
  this.pos = pos;

  this.charge = 0;

  this.tick = function(ih)
  {
    var input;
    switch(pos)
    {
      case "up"   : input = ih.up;    break;
      case "right": input = ih.right; break;
      case "down" : input = ih.down;  break;
      case "left" : input = ih.left;  break;
    }
    if(input) this.charge++;
    else this.charge--;
    if(this.charge < 0) this.charge = 0;
  };

  this.draw = function(canv)
  {
    var color   = this.charge.toString(16);
    if(this.charge < 16) color = "0"+color;
    if(this.charge > 255) color = "FF";

    canv.context.fillStyle = "#"+color+""+color+""+color;
    canv.context.fillRect(this.x,this.y,this.width,this.height);
  };
};
