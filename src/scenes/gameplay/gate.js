var Gate = function(x, y, width, height, color)
{
  this.type = "GATE";
  this.x = x;
  this.y = y;
  this.xvel = 0;
  this.yvel = 0;
  this.width  = width;
  this.height = height;
  this.color = color;
  this.justHit = 0;
  this.isHit = false;
  this.ballColor;

  this.tick = function(ih)
  {
	if (this.isHit && this.justHit <= 120) {
		this.justHit += 30;
	}
	else if (this.justHit > 0) {
		this.isHit = false;
		this.justHit -= 3;
	}
  };

  this.draw = function(canv)
  {
	if (this.justHit > 0) {
		var red   = parseInt(this.ballColor.substring(1,3), 16);
		var green = parseInt(this.ballColor.substring(3,5), 16);
		var blue  = parseInt(this.ballColor.substring(5,7), 16);
		red -= this.justHit;
		green -= this.justHit;
		blue -= this.justHit;
		if (red < 0) {
			red = 0;
		}
		if (green < 0) {
			green = 0;
		}
		if (blue < 0) {
			blue = 0;
		}
		if (red >= 254) {
			red = 254;
		}
		if (green >= 254) {
			green = 254;
		}
		if (blue >= 254) {
			blue = 254;
		}
		//Gross...
		if ((red < 10) && (green < 10) && (blue < 10)) {
			var newColor = "#0" + red.toString(16) + "0" + green.toString(16) + "0" + blue.toString(16);
		}
		else if ((red < 10) && (green < 10)) {
			var newColor = "#0" + red.toString(16) + "0" + green.toString(16) + "" + blue.toString(16);
		}
		else if ((red < 10) && (blue < 10)) {
			var newColor = "#0" + red.toString(16) + "" + green.toString(16) + "0" + blue.toString(16);
		}
		else if ((green < 10) && (blue < 10)) {
			var newColor = "#" + red.toString(16) + "0" + green.toString(16) + "0" + blue.toString(16);
		}
		else if (red < 10) {
			var newColor = "#0" + red.toString(16) + "" + green.toString(16) + "" + blue.toString(16);
		}
		else if (green < 10) {
			var newColor = "#" + red.toString(16) + "0" + green.toString(16) + "" + blue.toString(16);
		}
		else if (blue < 10) {
			var newColor = "#" + red.toString(16) + "" + green.toString(16) + "0" + blue.toString(16);
		}
		else {
			var newColor = "#" + red.toString(16) + "" + green.toString(16) + "" + blue.toString(16);
		}
		canv.context.fillStyle = newColor;
	}
	else {
		canv.context.fillStyle = this.color;
	}
    //Needs bounce
    canv.context.fillRect(this.x-(this.width/2)-((this.justHit)/10),this.y-(this.height/2)-2,this.width + (this.justHit/4),this.height + (this.justHit/4));
  };

  this.collide = function(thing)
  {
    if(thing.type == "BALL")
    {
      var speed = Math.sqrt((thing.xvel*thing.xvel) + (thing.yvel*thing.yvel));
      if(speed > 10) {
		//console.log("BREAK");
	  }
	  this.isHit = true;
	  this.ballColor = thing.color;  	
    }
  };
};

