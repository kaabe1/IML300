let fontTitle;

let img;
let balls = [];

var gravity = 0.3;  

function preload() {
  img = loadImage('https://cdn.glitch.com/12c318ce-e2d8-431d-a7c9-dbd315434f5b%2Fstar-04.png?v=1619079494824');
  //grey stars. img = loadImage('https://cdn.glitch.com/12c318ce-e2d8-431d-a7c9-dbd315434f5b%2FPNGIX.com_star-png_191953.png?v=1618801031493');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
    for (let i = 0; i < 15; i++) {
    balls[i] = new ball();
    }
}
function draw() {
    
  let x = mouseX;
  let y = mouseY;
  let ix = width - mouseX;  // Inverse X
  let iy = height - mouseY; // Inverse Y
  
clear();
  
   for (let i = 0; i < balls.length; i++) {
    balls[i].shape();
    balls[i].update();
  }
}

class ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.w = random(30, 70);
      this.speed = 0;  // size
  }
  shape() {
     image(img, this.x, this.y, this.w,this.w);
  }
  
  update() {
    // Add speed to location
    this.y = this.y + this.speed; 

    // Add gravity to speed
    this.speed = this.speed + gravity; 

    // If square reaches the bottom 
    // Reverse speed 
    if (this.y > height) { 
      this.speed = this.speed * -0.95;  
    } 
  }
}