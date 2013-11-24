var ParticleHandler = function()
{
  var self = this;
  var particles = [];

  self.registerParticle = function(particle)
  {
    particles.push(particle);
  }

  self.tick = function()
  {
    for(var i = 0; i < particles.length; i++)
      particles[i].tick();
  }

  self.draw = function(canv)
  {
    for(var i = 0; i < particles.length; i++)
      particles[i].draw(canv);
  }
}

