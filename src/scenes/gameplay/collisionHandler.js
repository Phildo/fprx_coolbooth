var CollisionHandler = function(entities)
{
  this.tick = function()
  {
    for(var i = 0; i < entities.length; i++)
    {
      for(var j = i; j < entities.length; j++)
      {
        if(i == j) continue;
        var ei = entities[i];
        var ej = entities[j];

        var lefti  = ei.x-(ei.width/2);
        var righti = ei.x+(ei.width/2);
        var upi    = ei.y-(ei.height/2);
        var downi  = ei.y+(ei.height/2);

        var leftj  = ej.x-(ej.width/2);
        var rightj = ej.x+(ej.width/2);
        var upj    = ej.y-(ej.height/2);
        var downj  = ej.y+(ej.height/2);

        var xcol = false;
        if(lefti < leftj && righti > leftj)  xcol = true;
        if(lefti > leftj && lefti  < rightj) xcol = true;
        if(lefti > lefti && righti < rightj) xcol = true;
        
        var ycol = false;
        if(upi < upj && downi > upj)  ycol = true;
        if(upi > upj && upi  < downj) ycol = true;
        if(upi > upi && downi < downj) ycol = true;

        if(xcol && ycol)
        {
          ei.collide(ej);
          ej.collide(ei);
        }
      }
    }
  };
}

