var Ball = function(x, y, xvel, yvel, color, ph)
{
  this.type = "BALL";
  this.x = x;
  this.y = y;
  this.width  = 10;
  this.height = 10;
  this.color = color;

  this.xvel = xvel;
  this.yvel = yvel;

  var self = this;

  this.tick = function(ih)
  {
    this.x += this.xvel;
    this.y += this.yvel;

    this.xvel = this.xvel*0.995;
    this.yvel = this.yvel*0.995;

    if(this.xvel <  2 && this.xvel > 0) this.xvel = 2;
    if(this.xvel > -2 && this.xvel < 0) this.xvel = -2;
    if(this.yvel <  2 && this.yvel > 0) this.yvel = 2;
    if(this.yvel > -2 && this.yvel < 0) this.yvel = -2;
  };

  this.draw = function(canv)
  {
    canv.context.beginPath();
    canv.context.arc(this.x, this.y, this.width/2, 0, 2*Math.PI, false);
    canv.context.fillStyle = this.color;
    canv.context.fill();
    canv.context.lineWidth = 5;
    canv.context.strokeStyle = this.color;
    canv.context.stroke();
  };

  this.cleanup = function() {
  }	

  this.collide = function(thing)
  {
    if(thing.type == "WALL")
    {
      switch(thing.pos)
      {
        case "up":
          if(this.yvel < 0) this.yvel = -this.yvel;//if its going the wrong direction, point it in the right direction
          if(this.y-this.height/2 < thing.y+thing.height/2) this.y = thing.y+thing.height/2+this.height/2; //if its inside the wall, bring it outside the wall
          this.yvel += thing.yvel; //add the walls velocity to the balls velocity
          break;
        case "right":
          if(this.xvel > 0) this.xvel = -this.xvel;
          if(this.x+this.width/2 > thing.x-thing.width/2) this.x = thing.x-thing.width/2-this.width/2;
          this.xvel += thing.xvel;
          break;
        case "down":
          if(this.yvel > 0) this.yvel = -this.yvel;
          if(this.y+this.height/2 > thing.y-thing.height/2) this.y = thing.y-thing.height/2-this.height/2;
          this.yvel += thing.yvel;
          break;
        case "left":
          if(this.xvel < 0) this.xvel = -this.xvel;
          if(this.x-this.width/2 < thing.x+thing.width/2) this.x = thing.x+thing.width/2+this.width/2;
          this.xvel += thing.xvel;
          break;
      }

      ph.registerParticle(new StrikeSpot(self, false));
    }
    if (thing.type == "GATE") 
    {
      ph.registerParticle(new StrikeSpot(self, true));
    }
  };
};
