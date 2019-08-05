let circles = [];

class Circle {
  constructor() {
    this.color = [random(0, 255), random(0, 255), random(0, 255)];
    this.size = random(50, 300);
    this.x = random(this.size / 2, window.innerWidth);
    this.y = random(this.size / 2, window.innerHeight);
    this.pos = createVector(this.x, this.y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
  }

  move() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  display() {
    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
    return ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 5; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(255);
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}
