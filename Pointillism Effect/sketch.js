var img, x, y;

function preload() {

  img = loadImage("sunset.jpg");

}

function setup() {

  createCanvas (img.width, img.height);
  background(0);
  noStroke();

}

function draw() {

  x = random(width);
  y = random(height);
  var c = img.get(x, y);
  fill(c[0], c[1], c[2], 300); //fill(_, _, _, transparency)
  square(x, y, 15);

}