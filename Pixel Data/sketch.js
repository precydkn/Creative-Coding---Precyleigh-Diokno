var img, x, y;

function preload() {

  img = loadImage("color.png");

}

function setup() {

  createCanvas (img.width, img.height); //canvas size == img size
  noStroke();

}

function draw() {

  x = mouseX;
  y = mouseY;
  image(img, 0, 0);
  var color = get(x, y);

  // display color code. 
  // ! code is in rgba format. wanted to change it to hex but still cant find a way yet.
  fill(255)
  // if some of the text is not seen from the screen, display it to the left of mouse
  if (x >= 240) {
    textAlign(RIGHT); // right-aligned so that text doesnt touch the pixel box if it's too long
    text(color, x-10, y+20);}
  // else still display it to the right
  else {
    textAlign(LEFT);
    text(color, x+35, y+20);}
  fill(color);
  rect(x, y, 25, 25);

}