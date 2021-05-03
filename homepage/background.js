let img;
let balls = [];


function preload() {
    //img = loadImage('https://cdn.glitch.com/12c318ce-e2d8-431d-a7c9-dbd315434f5b%2FPNGIX.com_star-png_191953.png?v=1618801031493');}
   img = loadImage('https://cdn.glitch.com/12c318ce-e2d8-431d-a7c9-dbd315434f5b%2Fstar-04.png?v=1619079494824');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 15; i++) {
    balls[i] = new ball();
  }
}

function draw() {
  clear();
  for (let i = 0; i < balls.length; i++) {
    balls[i].shape();
    balls[i].drift();
    balls[i].bounce();
  }
}

class ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
        this.w = random(40, 70);
    this.speedx = random(-2, 2);
    this.speedy = random(-2, 2);
  }
  shape() {
    image(img, this.x, this.y, this.w, this.w);
  }
  drift() {
    this.x += this.speedx;
    this.y += this.speedy;
  }
  bounce() {
    if(this.x < 0 || this.x > windowWidth) {
      this.speedx = this.speedx * -1;
    }
    if(this.y < 0 || this.y > windowHeight) {
      this.speedy = this.speedy * -1;
    }
  }
}