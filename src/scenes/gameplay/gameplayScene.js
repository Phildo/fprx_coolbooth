var GamePlayScene = function(game, canv)
{
  var entities;

  var bf;

  var ih;
  var ch;
  var ph;

  var balls;
  var walls;
  var gate;

  this.ready = function()
  {
    entities = [];
    ih = new InputHandler();
    ph = new ParticleHandler();

    bf = new BallFactory(canv,ph);

    balls = [];
    for(var i = 0; i < 6; i++)
      balls.push(bf.createBall());

    walls = [];
    walls.push(new Wall(  canv.width/2,            -100, 2*canv.width,           280, "up"));
    walls.push(new Wall(canv.width+100,   canv.height/2,          280, 2*canv.height, "right"));
    walls.push(new Wall(  canv.width/2, canv.height+100, 2*canv.width,           280, "down"));
    walls.push(new Wall(          -100,   canv.height/2,          280, 2*canv.height, "left"));
    gate = new Gate(canv.width/2, 20.5, 40, 40, "#888888");

    for(var i = 0; i < balls.length; i++) {
      entities.push(balls[i]);
    } 
    for(var i = 0; i < walls.length; i++) {
      entities.push(walls[i]);
    }
    entities.push(gate);

    ch = new CollisionHandler(entities);
  };

  this.tick = function()
  {
    ph.tick();
    ch.tick();
    for(var i = 0; i < entities.length; i++) {
      entities[i].tick(ih);
    }
  };

  this.draw = function()
  {
    ph.draw(canv);
    for(var i = 0; i < entities.length; i++) {
      entities[i].draw(canv);
    }  
  };

  this.cleanup = function()
  {
  };
};

