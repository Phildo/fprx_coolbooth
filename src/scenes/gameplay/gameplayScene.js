var GamePlayScene = function(game, canv)
{
  var entities;
  
  var ball;
  var walls;
  var gate;

  var ch;
  var ih;
  
  this.ready = function()
  {
    entities = [];

    ih = new InputHandler();

    ball = new Ball(0,0);
    walls = [];
    walls.push(new Wall(0,            0,             canv.width,10,         "up"));
    walls.push(new Wall(canv.width-10,0,             10,        canv.height,"right"));
    walls.push(new Wall(0,            canv.height-10,canv.width,10,         "down"));
    walls.push(new Wall(0,            0,             10,        canv.height,"left"));
    gate = new Gate();

    entities.push(ball);
    for(var i = 0; i < walls.length; i++)
     entities.push(walls[i]);
    entities.push(gate);
  };

  this.tick = function()
  {
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

