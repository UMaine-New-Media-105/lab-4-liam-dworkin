let scaleX = 2;
let orientation = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("palegoldenrod");

  yeetBall(200, 200, 5, "orange", "purple", "pink");

  yeetBall(250, 250, 2, "yellow", "blue", "red");

  yeetBall(100, 100, 1, "cyan", "green", "blue");
}

function yeetBall(x, y, size, color1, color2, stroke1) {
  if (mouseIsPressed) {
    push();
    translate(x, y);
    scale(size);
    fill(color1);
    stroke(stroke1);
    ellipse(0, 0, 80, 80);
    scale(scaleX / 5);
    translate(orientation * -2.3, orientation * -0.03);
    fill(color2);
    textSize(75);
    noStroke();
    text("(✿ᴗ✿)", 0, 0);
    pop();
  } else {
    push();
    fill("cyan");
    rect(90, 90, 200, 200);
    translate(130, 150);
    textSize(40);
    textFont("helvetica");
    fill("purple");
    stroke("purple");
    text("Hey VJ,", -20, 0);
    fill("red");
    stroke("red");
    text("is this good?", -40, 70);
    pop();
  }
}
