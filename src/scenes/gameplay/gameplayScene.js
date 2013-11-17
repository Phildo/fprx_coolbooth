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
    var numWalls = 4;
    entities = [];

    ih = new InputHandler();

    ball = new Ball();
    walls = [];
    for(var i = 0; i < numWalls; i++)
     walls.push(new Wall());
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
