var Ball = function(x, y, xvel, yvel, color)
{
  this.type = "BALL";
  this.x = x;
  this.y = y;
  this.width  = 10;
  this.height = 10;
  this.color = color;
  this.strikes = [];

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

	if (self.strikes.length > 0) {
		for (var i = 0; i < self.strikes.length; i++) {
			self.strikes[i].tick();
		}
	}
	if (self.strikes.length > 3) {
		self.strikes.shift();
	}
  };

  this.draw = function(canv)
  {
    canv.context.beginPath();
    canv.context.arc(this.x, this.y, this.width/2, 0, 2*Math.PI, false);
    canv.context.fillStyle = this.color;
    canv.context.fill();
    canv.context.lineWidth = 5;
    canv.context.strokeStyle = this.color;
    //canv.context.strokeStyle = '#003300';
    canv.context.stroke();

	if (self.strikes.length > 0) {
		for (var i = 0; i < self.strikes.length; i++) {
			self.strikes[i].draw(canv);
		}
	}
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

	  //Strike
	  strike = new StrikeSpot(self, false);
	  self.strikes.push(strike);
    }
	if (thing.type == "GATE") 
	{
		console.log("hit gate");
		strike = new StrikeSpot(self, true);
		self.strikes.push(strike);
	}
	
  };
};
