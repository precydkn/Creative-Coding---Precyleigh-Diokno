function setup() {
  createCanvas(700, 500);
  background(0); 
  noStroke(); 
  
  //~~~~~~~~~~instructions~~~~~~~~~~
  fill(255); //text color
  text('X to clear canvas     S to download canvas', 460, 20);
  
  //~~~~~~~~~~color palette selection~~~~~~~~~~
  //loops 10 times for the 10 colors. every iteration is a new color and position
  for (var i=0; i<10; i++) {
    if (i==0) col=0 //black
    if (i==1) col='#F39897' //red
    if (i==2) col='#F8CEA6' //orange
    if (i==3) col='#FBF3B3'//yellow
    if (i==4) col='#D1EBAC' //green
    if (i==5) col='#B6D3F1'//blue
    if (i==6) col='#B7ADE9' //violet
    if (i==7) col='#F3B7C2' //pink
    if (i==8) col='#8D8D8D' //gray
    if (i==9) col=255 //white
    
    strokeWeight(1); //circle outline
    stroke(255);
    fill(col);
    circle(15+22*i, 15, 20); //(x, y, w&h): since x*i, it gives a diff position to the new circles
  }
} 

function draw() {  
  //~~~~~~~~~~drawing cursor~~~~~~~~~~
  if (mouseIsPressed) {
    //~~~~~~~~~~applying selected color~~~~~~~~~~
    if (mouseY > 5 && mouseY < 25) { // check if mouse is within the palette height
      if (mouseX > 5 && mouseX < 25) col = 0; //black
      else if (mouseX > 27 && mouseX < 47) col = '#F39897'; //red
      else if (mouseX > 49 && mouseX < 69) col = '#F8CEA6'; //orange
      else if (mouseX > 71 && mouseX < 91) col = '#FBF3B3'; //yellow
      else if (mouseX > 93 && mouseX < 113) col = '#D1EBAC'; //green
      else if (mouseX > 115 && mouseX < 135) col = '#B6D3F1'; //blue
      else if (mouseX > 137 && mouseX < 157) col = '#B7ADE9'; //violet
      else if (mouseX > 159 && mouseX < 179) col = '#F3B7C2'; //pink
      else if (mouseX > 181 && mouseX < 201) col = '#8D8D8D'; //gray
      else if (mouseX > 203 && mouseX < 223) col = 255; //white
    }
    
    strokeWeight(5);
    stroke(col);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  //~~~~~~~~~~clear canvas~~~~~~~~~~
  //erase drawing when 'x'(88) is pressed
  if (keyIsPressed) {if (keyCode==88) {setup()}} //'if (keyIsPressed)' is added so we can draw again after pressing 'x'
  
  //~~~~~~~~~~save canvas~~~~~~~~~~
  if (keyCode==83){saveCanvas('drawing.png')} //keyCode 83 == s
}