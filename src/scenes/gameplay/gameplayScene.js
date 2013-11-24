var GamePlayScene = function(game, canv)
{
  var self = this;
  var rooms;
  var ball;

  var ih;
  var ch;
  var ph;
  var tickables;
  var drawables;

  self.ready = function()
  {
    ih = new InputHandler();
    ch = new CollisionHandler();
    ph = new ParticleHandler();
    tickables = [];
    drawables = [];

    rooms = [];
    rooms.push(new Room(canv.width, canv.height, self));
    ball = new Ball(Math.random()*canv.width,Math.random()*canv.height,Math.random()*16-8,Math.random()*16-8, self);
    self.registerEntity(ball);

    rooms[0].ready();
  };

  self.tick = function()
  {
    ph.tick();
    ch.tick();
    for(var i = 0; i < tickables.length; i++)
      tickables[i].tick(ih);
  };

  self.draw = function()
  {
    ph.draw(canv);
    for(var i = 0; i < drawables.length; i++)
      drawables[i].draw(canv);
  };

  self.cleanup = function()
  {
  };

  self.wasDefeated = function(room)
  {
    console.log("Room defeated");
  }

  self.registerParticle = function(particle)
  {
    ph.registerParticle(particle);
  }

  self.registerEntity = function(entity)
  {
    if(entity.collidable) ch.registerCollidable(entity);
    if(entity.tickable) tickables.push(entity);
    if(entity.drawable) drawables.push(entity);
  }

  self.unregisterEntity = function(entity)
  {
    if(entity.collidable) ch.unregisterCollidable(entity);
    if(entity.tickable) tickables.splice(tickables.indexOf(entity),1);
    if(entity.drawable) drawables.splice(drawables.indexOf(entity),1);
  }
};

