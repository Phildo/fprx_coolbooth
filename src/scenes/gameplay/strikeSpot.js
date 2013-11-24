var StrikeSpot = function(ball, gateHit) {
  this.x = ball.x;
  this.y = ball.y;
  this.width = 1;
  this.radius = 2*Math.PI;
  this.color = ball.color;
  this.gateHit = gateHit;

  //Really long cumbersome way to make a rainbow effect
  this.r1Color = parseInt(this.color.substring(1,2), 16);
  this.r2Color = parseInt(this.color.substring(2,3), 16);
  this.g1Color = parseInt(this.color.substring(3,4), 16);
  this.g2Color = parseInt(this.color.substring(4,5), 16);
  this.b1Color = parseInt(this.color.substring(5,6), 16);
  this.b2Color = parseInt(this.color.substring(6),   16);
  //yeah

  //Set increment/decrement based on current val
  this.r1Inc = (this.r1Color >= 0 && this.r1Color < 15);
  this.r2Inc = (this.r2Color >= 0 && this.r2Color < 15);
  this.g1Inc = (this.g1Color >= 0 && this.g1Color < 15);
  this.g2Inc = (this.g2Color >= 0 && this.g2Color < 15);
  this.b1Inc = (this.b1Color >= 0 && this.b1Color < 15);
  this.b2Inc = (this.b2Color >= 0 && this.b2Color < 15);

  this.vel = Math.sqrt((ball.xvel * ball.xvel) + (ball.yvel * ball.yvel));

  //Sets the velocity of the circle expansion equal to the ball's velocity on contact
  this.tick = function()
  {
    if (gateHit) {
      this.width += 2*(this.vel);
    }
    else {
      this.width += this.vel;
    }

  };
  //Why does it draw over sometimes and not others?
  this.draw = function(canv) 
  {
    if (this.gateHit) {
      var randomColor = Math.floor(Math.random()*6);
      switch (randomColor) {
        case 0: if (this.r1Inc && this.r1Color < 15) {
                  this.r1Color++;
                }
                else if (this.r1Inc && this.r1Color == 15){
                  this.r1Inc = false;
                  this.r1Color--;
                }
                else if (!this.r1Inc && this.r1Color > 0) {
                  this.r1Color--;
                }
                else if (!this.r1Inc && this.r1Color == 0) {
                  this.r1Inc = true;
                  this.r1Color++;
                }
                break;
        case 1: if (this.r2Inc && this.r2Color < 15) {
                  this.r2Color++;
                }
                else if (this.r2Inc && this.r2Color == 15){
                  this.r2Inc = false;
                  this.r2Color--;
                }
                else if (!this.r2Inc && this.r2Color > 0) {
                  this.r2Color--;
                }
                else if (!this.r2Inc && this.r2Color == 0) {
                  this.r2Inc = true;
                  this.r2Color++;
                }
                break;
        case 2: if (this.g1Inc && this.g1Color < 15) {
                  this.g1Color++;
                }
                else if (this.g1Inc && this.g1Color == 15){
                  this.g1Inc = false;
                  this.g1Color--;
                }
                else if (!this.g1Inc && this.g1Color > 0) {
                  this.g1Color--;
                }
                else if (!this.g1Inc && this.g1Color == 0) {
                  this.g1Inc = true;
                  this.g1Color++;
                }
                break;
        case 3: if (this.g2Inc && this.g2Color < 15) {
                  this.g2Color++;
                }
                else if (this.g2Inc && this.g2Color == 15){
                  this.g2Inc = false;
                  this.g2Color--;
                }
                else if (!this.g2Inc && this.g2Color > 0) {
                  this.g2Color--;
                }
                else if (!this.g2Inc && this.g2Color == 0) {
                  this.g2Inc = true;
                  this.g2Color++;
                }
                break;
        case 4: if (this.b1Inc && this.b1Color < 15) {
                  this.b1Color++;
                }
                else if (this.r1Inc && this.b1Color == 15){
                  this.b1Inc = false;
                  this.b1Color--;
                }
                else if (!this.b1Inc && this.b1Color > 0) {
                  this.b1Color--;
                }
                else if (!this.b1Inc && this.b1Color == 0) {
                  this.b1Inc = true;
                  this.b1Color++;
                }
                break;
        case 1: if (this.b2Inc && this.b2Color < 15) {
                  this.b2Color++;
                }
                else if (this.b2Inc && this.b2Color == 15){
                  this.b2Inc = false;
                  this.b2Color--;
                }
                else if (!this.b2Inc && this.b2Color > 0) {
                  this.b2Color--;
                }
                else if (!this.b2Inc && this.b2Color == 0) {
                  this.b2Inc = true;
                  this.b2Color++;
                }
                break;
      }
      var newColor = "#"  + this.r1Color.toString(16) + ""
        + this.r2Color.toString(16) + ""
        + this.g1Color.toString(16) + ""
        + this.g2Color.toString(16) + ""
        + this.b1Color.toString(16) + ""
        + this.b2Color.toString(16);
      canv.context.beginPath();
      canv.context.arc(this.x, this.y, this.width/2, 0, this.radius, false);
      canv.context.lineWidth = 10;
      canv.context.fillStyle = newColor;
      canv.context.fill();
      canv.context.strokeStyle = newColor;
      canv.context.stroke();

    }
    else {
      canv.context.beginPath();
      canv.context.arc(this.x, this.y, this.width/2, 0, this.radius, false);
      canv.context.lineWidth = 2;
      canv.context.strokeStyle = this.color;
      canv.context.stroke();
    }

  };

};
