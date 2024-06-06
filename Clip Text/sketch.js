let img;

function preload(){
  
  img=loadImage("filter.jpg");
  nosifer = loadFont("Nosifer.ttf"); //to add custom font
  
}

function setup() {
  
  createCanvas(700, 700);
  background("#0F0F0F"); //purple "#531174"
  
  translate(70, 70);
  
  // img behind text
  pic = createGraphics(width, height); // sub canvas (same size as main canvas)
  pic.square(0, 0, 560);
  pic.canvas.getContext("2d").clip();
  pic.image(img, 0,0) //of image to clip in square: (img, x, y)
  image(pic, 0, 0); //of subcanvas: (var, x, y)
  
  // text
  txt = createGraphics(width, height);
  txt.fill("#564A6E");
  txt.square(0, 0, 560);
  txt.erase();
  txt.textSize(100);
  txt.textAlign(CENTER); //align text to center
  txt.textFont(nosifer) //set text font to custom
  txt.text('where have you been?', 275, 120, 10); //(text, x, y, maxWidth)
  image(txt, 0, 0); //of subcanvas: (var, x, y)
}