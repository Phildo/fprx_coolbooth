var Wall = function(x, y, width, height,pos)
{
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
          this.yvel = -.2;
        }
        else 
          charging = false;
        break;
      case "right":
        if(ih.right)
        {
          charging = true;
          this.xvel = .2;
        }
        else 
          charging = false;
        break;
      case "down" :
        if(ih.down)
        {
          charging = true;
          this.yvel = .2;
        }
        else 
          charging = false;
        break;
      case "left" :
        if(ih.left)
        {
          charging = true;
          this.xvel = -.2;
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

    this.xvel = this.xvel * 0.99;
    this.yvel = this.yvel * 0.99;
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

