var InputHandler = function()
{
  this.up    = false;
  this.left  = false;
  this.right = false;
  this.down  = false;

  function downKey(e)
  {
    switch(e.keyCode)
    {
      case 87:
        this.up = true;
        break;
      case 65:
        this.left = true;
        break;
      case 68:
        this.right = true;
        break;
      case 83:
        this.down = true;
        break;
    }
  };

  function upKey(e)
  {
    switch(e.keyCode)
    {
      case 87:
        this.up = false;
        break;
      case 65:
        this.left = false;
        break;
      case 68:
        this.right = false;
        break;
      case 83:
        this.down = false;
        break;
    }
  };

  document.addEventListener('keydown', downKey, false);
  document.addEventListener('keyup', upKey, false);
};
