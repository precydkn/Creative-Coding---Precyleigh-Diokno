let font1, font2, font3, font4;

function preload() {
  font1 = loadFont('fonts/MACRO_FREE.ttf');
  font2 = loadFont('fonts/TT Rounds Neue Trial Condensed Black.ttf');
  font3 = loadFont('fonts/ZenDots-Regular.ttf');
  font4 = loadFont('fonts/THINKTANK DEMO Regular.otf');
  font5 = loadFont('fonts/partyline.ttf');
}

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background('#C3DBF4');
  textAlign(CENTER);
  textSize(40)

  let fonts = [font1, font2, font3, font4, font5],
      colors = ['#0A099F', '#0D0443', '#0D065B', '#0D0774', '#090881'];
  
  //loop that displays text with diff positions and colors
  for (var i=0; i < 5; i++) {
    fill(colors[i]);
    textFont(fonts[i]);
    text('Bath Spa University', width/2, 60 * i + 100);
  }
}