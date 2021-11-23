const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let particlesArray = [];
const numberOfParticles = 200;
ctx.lineCap = "round";

const mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

const img = new Image();
img.src = "Flat-design-santa-claus.png";

let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "red");
gradient.addColorStop(0.6, "green");
gradient.addColorStop(1, "rgba(255, 255, 255, 0.1");

// Declares a blueprint so that you can create multiple particles/objects
class Particle {
  constructor() {
    this.radius = Math.random() * 200 + 20; // size of each particle
    this.x = Math.random() * canvas.width; // random x cordinate of the canvas width
    this.y = canvas.height * this.radius * 2; // now the particales can go below the canvas
    this.speedY = Math.random() * 5 + 1; //how fast particles move on the Y axis
    this.speedX = Math.random() * 3 - 1.5; //how fast particles move on the X axis
    this.angle = Math.random * 360; //so that particles can move in all of the 360 space
    this.spin = Math.random() < 0.5 ? 1 : -1; //random number between 0 and 1, if number <0.5 set it to 1 or -1 (if/else statement)
    // this.frameX = Math.floor(Math.random() * 3);
    // this.frameY = Math.floor(Math.random() * 3);
    // this.spriteSize = 900 / 3;
  }
  update() {
    this.angle += 5; //makes partilces rotate
    this.y -= this.speedY; //makes particles move up in vertical direction
    this.x += this.speedX;
    if (this.radius > 1) this.radis -= 0.5; //if radius is more than 1 decrease radius by 0.5 for every animation
  }

  // declres how the particles will look
  draw() {
    ctx.save(); //saves current state of the canvas
    ctx.translate(this.x, this.y); //moves the 0 cordinates to the passed cordinates
    ctx.rotate(((this.angle * Math.PI) / 360) * this.spin); //rotates canvas around its center point
    ctx.drawImage(img, 5, 5, 25, 25); //(img,x,y,width,height)
    ctx.translate(-this.x, this.x);
    ctx.restore();
  }
}

function init() {
  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
}

init();

//pushes new particles when its under the amount of numberOfParticles.
//so that you dont overflow the webpage, we remove all particles with a radius under 1.
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (particlesArray.length < numberOfParticles) {
    particlesArray.push(new Particle());
  }
  connectToPointer();

  for (let i = 0; i < particlesArray.length; i++) {
    if (particlesArray[i].radius <= 1) {
      particlesArray.splice(i, 1);
    }
    particlesArray[i].update();
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}
animate();

//connects rays to mouse pointer
function connectToPointer() {
  for (let i = 0; i < particlesArray.length; i++) {
    ctx.strokeStyle = gradient;
    ctx.lineWidth = particlesArray[i].radius / 5;
    ctx.beginPath();
    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
    ctx.closePath();
  }
}
