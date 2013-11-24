var Room = function(w,h,delegate)
{
  var self = this;

  var walls;
  var gate;

  this.ready = function()
  {
    walls = [];
    walls.push(new Wall(  w/2,  -100, 2*w, 280, "up"));
    walls.push(new Wall(w+100,   h/2, 280, 2*h, "right"));
    walls.push(new Wall(  w/2, h+100, 2*w, 280, "down"));
    walls.push(new Wall( -100,   h/2, 280, 2*h, "left"));
    gate = new Gate(w/2, 20.5, 40, 40, "#888888", this);

    for(var i = 0; i < walls.length; i++)
      delegate.registerEntity(walls[i]);
    delegate.registerEntity(gate);
  }

  this.cleanup = function()
  {
    for(var i = 0; i < walls.length; i++)
      delegate.unregisterEntity(walls[i]);
    delegate.unregisterEntity(gate);
  }

  this.wasDefeated = function()
  {
    delegate.wasDefeated(this);
  }
}

