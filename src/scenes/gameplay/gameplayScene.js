var GamePlayScene = function(game, canv)
{
  var entities;
  
  var ball;
  var walls;
  var gate;

  var ih;
  var ch;
  
  this.ready = function()
  {
    entities = [];

    ih = new InputHandler();

    ball = new Ball(canv.width/2,canv.height/2);
    walls = [];
    walls.push(new Wall(  canv.width/2,            -100, 2*canv.width,           280, "up"));
    walls.push(new Wall(canv.width+100,   canv.height/2,          280, 2*canv.height, "right"));
    walls.push(new Wall(  canv.width/2, canv.height+100, 2*canv.width,           280, "down"));
    walls.push(new Wall(          -100,   canv.height/2,          280, 2*canv.height, "left"));
    gate = new Gate(canv.width/2, 5, 40, 10);

    entities.push(ball);
    for(var i = 0; i < walls.length; i++)
     entities.push(walls[i]);
    entities.push(gate);

    ch = new CollisionHandler(entities);
  };

  this.tick = function()
  {
    ch.tick();
    for(var i = 0; i < entities.length; i++)
      entities[i].tick(ih);
  };

  this.draw = function()
  {
    for(var i = 0; i < entities.length; i++)
      entities[i].draw(canv);
  };

  this.cleanup = function()
  {
  };
};

