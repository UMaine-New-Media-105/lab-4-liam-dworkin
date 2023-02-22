function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rect1(150, 150, 50, 200, 300, 70, OPEN, 100, 30, 50);

  ellip1(50, 50, 80, 80, 30, 190, 200);

  tri1(30, 95, 8, 40, 90, 75, "blue", 200, 200, 220, 40, 40);
}

function rect1(x, y, w, h, start, stop, open1, color1, color2, color3) {
  push();
  fill(color1, color2, color3);
  stroke("black");
  arc(x, y, w, h, start, stop, open1);
  pop();
}

function ellip1(x, y, size1, size2, color1, color2, color3) {
  push();
  fill(color1, color2, color3);
  stroke("black");
  ellipse(x, y, size1, size2);
  pop();
}

function tri1(x, y, z, a, b, c, color, move1, move2, color1, color2, color3) {
  push();
  fill(color1, color2, color3);
  translate(move1, move2);
  stroke("black");
  triangle(x, y, z, a, b, c);
  pop();
}
