var BallFactory = function(canv,ph)
{
  var self = this;

  function randomColor()
  {
    switch(Math.floor(Math.random()*5))
    {
      case 0:
        return "#ff0000";
        break;
      case 1:
        return "#00ff00";
        break;
      case 2:
        return "#0000ff";
        break;
      case 3:
        return "#ffff00";
        break;
      case 4:
        return "#ff00ff";
        break;
    }
  }

  self.createBall = function()
  {
    return new Ball(Math.random()*canv.width,Math.random()*canv.height,Math.random()*16-8,Math.random()*16-8, randomColor(), ph);
  }
}

