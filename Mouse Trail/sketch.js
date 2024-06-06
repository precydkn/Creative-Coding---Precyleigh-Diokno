let symbols = ['⧣', '₊', '˚', '﹒', '✦', '★', '⸝⸝', '♡', '✶', '⋆', '✧', '⊹', '. ݁', '☾', '｡', '˓', '˒', '⚝'];
let clickOs = []; //to store ◌

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30); //changing frame speed
  textAlign(CENTER, CENTER); 
}

function draw() {
  fill(255, 30);
  noStroke();
  rect(0, 0, width, height);

  var symbol = random(symbols); //get random symbols from symbols array
  fill(random(0, 255), random(0, 255), random(0, 255));
  textSize(20);
  text(symbol, mouseX + 15, mouseY + 25); //show and position trail

  //update and display ◌ 
  for (let i = clickOs.length - 1; i >= 0; i--) {
    let currentO = clickOs[i];
    currentO.update();
    currentO.display();
    if (currentO.size >= currentO.maxSize) {
      clickOs.splice(i, 1); //remove ◌ once it reaches max size
    }
  }
}

//◌ on mouse press
class ClickO {
  constructor(o, x, y) {
    this.o = o; //symbol to display
    this.x = x; //x pos
    this.y = y; //y pos
    this.size = 40; //initial ◌ size 
    this.maxSize = 80; //max ◌ size
  }

  //update symbol's state (making it bigger)
  update() {
    if (this.size < this.maxSize) {
      this.size += 4; //value being added to reach max size (like speed of growth)
    }
  }

  //display particle
  display() {
    textSize(this.size);
    fill(random(255), random(255), random(255), 50);
    text(this.o, this.x, this.y);
  }
}

//generate ◌ on mouse press
function mousePressed() {
  let o = '◌';
  let newO = new ClickO(o, mouseX, mouseY-5); //create new ◌
  clickOs.push(newO); //add particle to array
}

//resize canvas to window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}