var img;

function preload() {

  img = loadImage("filter2.jpg"); // img source: https://www.pinterest.com/pin/563018696821230/

}

function setup () {

  createCanvas (img.width, img.height);

}

function draw() {

  background(0);
  //top-right, THRESHOLD
  image(img, img.width/2, 0, img.width/2, img.height/2); //top-right
  var v = map(mouseX, 0, width, 0, 0.5);
  filter(THRESHOLD, v);
  filter(POSTERIZE, false);
  
  //bot-left
  image(img, 0, img.height/2, img.width/2, img.height/2);
  var w = map(mouseX, 0, width, 7, 2);
  filter(POSTERIZE, w);
  filter(INVERT, false)
  
  //bot-right
  image(img, img.width/2, img.height/2, img.width/2, img.height/2);
  filter(INVERT);
  
  //top-left, original img
  image(img, 0, 0, img.width/2, img.height/2);

}