var Wall = function(x, y, width, height,pos)
{
  this.drawable = true;
  this.tickable = true;
  this.collidable = true;

  this.type = "WALL";
  this.homeX = x;
  this.homeY = y;
  this.x = x;
  this.y = y;
  this.xvel = 0;
  this.yvel = 0;
  this.width  = width;
  this.height = height;
  this.pos = pos;

  this.tick = function(ih)
  {
    var charging = false;
    switch(this.pos)
    {
      case "up":
        if(ih.up)
        {
          charging = true;
          if(this.y < this.homeY-35) this.y = this.homeY-35;
          this.yvel = -(this.y-(this.homeY-35))/8;
        }
        else 
          charging = false;
        break;
      case "right":
        if(ih.right)
        {
          charging = true;
          if(this.x > this.homeX+35) this.x = this.homeX+35;
          this.xvel = ((this.homeX+35)-this.x)/8;
        }
        else 
          charging = false;
        break;
      case "down" :
        if(ih.down)
        {
          charging = true;
          if(this.y > this.homeY+35) this.y = this.homeY+35;
          this.yvel = ((this.homeY+35)-this.y)/8;
        }
        else 
          charging = false;
        break;
      case "left" :
        if(ih.left)
        {
          charging = true;
          if(this.x < this.homeX-35) this.x = this.homeX-35;
          this.xvel = -(this.x-(this.homeX-35))/8;
        }
        else
          charging = false;
        break;
    }

    this.x += this.xvel;
    this.y += this.yvel;

    if(!charging)
    {
      if(this.x < this.homeX) this.xvel += (this.homeX-this.x)/10;
      if(this.x > this.homeX) this.xvel -= (this.x-this.homeX)/10;
      if(this.y < this.homeY) this.yvel += (this.homeY-this.y)/10;
      if(this.y > this.homeY) this.yvel -= (this.y-this.homeY)/10;
    }

    this.xvel = this.xvel * 0.9;
    this.yvel = this.yvel * 0.9;
  };

  this.draw = function(canv)
  {
    canv.context.fillStyle = "#000000";
    canv.context.fillRect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
  };

  this.collide = function(thing)
  {
    
  };
};

