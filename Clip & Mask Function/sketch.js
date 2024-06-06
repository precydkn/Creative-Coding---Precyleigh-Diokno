let img, img2, milk, jack;

function preload() {
  
  img = loadImage("jsmilk2.5.jpg");
  img2 = loadImage("jack.jpg");
  
}

function setup() {
  
  createCanvas(700, 700);
  background("#D2D995");
  milk = createGraphics(600, 600); //canvas of milk mask
  jack = createGraphics(1400, 1400); //canvas of circle clip
  
}

function draw() {
  
  // clip func
  jack.circle(310, 310, 600); //(x, y, diameter)
  jack.canvas.getContext("2d").clip();
  jack.image(img2, 0, -40); //of img to clip in circle: (img, x, y)
  image(jack, 40, 360, 700, 700); //of subcanvas: (var, x, y, width, height)
  
  // mask func
  //img.resize(500,500)
  milk.quad(245, 121, 453, 131, 453, 178, 245, 178); //top
  milk.quad(245, 172, 453, 178, 505, 253, 194, 265); //mid
  milk.quad(405, 257, 505, 253, 505, 534, 405, 577); //right
  milk.quad(194, 265, 405, 257, 405, 577, 194, 558); //left
  
  img.mask(milk);
  image(img, 235, -20); 
  
  textSize(30);
  text("milk in milk.", 440, 500) 
}