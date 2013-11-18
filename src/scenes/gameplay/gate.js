var Gate = function(x, y, width, height)
{
  this.type = "GATE";
  this.x = x;
  this.y = y;
  this.xvel = 0;
  this.yvel = 0;
  this.width  = width;
  this.height = height;

  this.tick = function(ih)
  {
  };

  this.draw = function(canv)
  {
    canv.context.fillStyle = "#FF0000";
    canv.context.fillRect(this.x-(this.width/2),this.y-(this.height/2),this.width,this.height);
  };

  this.collide = function(thing)
  {
    if(thing.type == "BALL")
    {
      var speed = Math.sqrt((thing.xvel*thing.xvel) + (thing.yvel*thing.yvel));
      //console.log(speed);
      //if(speed > 10)
        //console.log("BREAK");
    }
  };
};

