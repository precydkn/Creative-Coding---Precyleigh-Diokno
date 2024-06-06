function setup() {
  createCanvas(700, 700);
  background(random(0, 255), random(0, 255), random(0, 255)); //randomized bg color
  textAlign(CENTER);
  textSize(20);
  text('click mouse to generate different results', 350, 350); //instruction
}

//shows drawings when mouse is released
function mouseReleased() {
  //CIRCLES: diameter = biggest circle, d = value to make smaller circles
  //XL
  var diameter=240, d=40;   
  //loop that will run for 6 times, making 6 circles
  for (var c=0; c<6; c++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255))
    strokeWeight(4);
    circle(578, 578, diameter);
    diameter-=d; //80 will be subtracted to 420 until loop is done
  }
  
  //L
  var diameter2=140, d2=20;   
  //loop that will run for 6 times, making 6 circles
  for (var c2=0; c2<6; c2++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(390, 627, diameter2);
    diameter2-=d2; //20 will be subtracted to 140 until loop is done
  }
  var diameter7=140, d7=20;   
  //loop that will run for 6 times, making 6 circles
  for (var c7=0; c7<6; c7++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(572, 385, diameter7);
    diameter7-=d7; //20 will be subtracted to 140 until loop is done
  }
  
  //M
  var diameter3=100, d3=20;
  for (var c3=0; c3<6; c3++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(54, 648, diameter3);
    diameter3-=d3;
  }
  var diameter4=100, d4=20;
  for (var c4=0; c4<6; c4++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(419, 508, diameter4);
    diameter4-=d4;
  }
  
  //S
  var diameter5=70, d5=20;
  for (var c5=0; c5<6; c5++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(286, 662, diameter5);
    diameter5-=d5;
  }
  var diameter6=70, d6=20;
  for (var c6=0; c6<6; c6++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(663, 444, diameter6);
    diameter6-=d6;
  }
  
  //XS
  var diameter8=50, d8=7;
  for (var c8=0; c8<6; c8++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(483, 462, diameter8);
    diameter8-=d8;
  }
  var diameter9=50, d9=7;
  for (var c9=0; c9<6; c9++) {
    fill(random(0, 200), 50, 130);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    strokeWeight(4);
    circle(130, 673, diameter9);
    diameter9-=d9;
  }
  
  //EMOJI PAIR: 🌠🌌 💫✨ 😎🤩 💜🖤
  //emojis are put in a list to pass in the random func
  var emojis=['🌌', '💫', '😎', '💜'], emoji=random(emojis), txt //emoji to output;
  //loop that will run for 4 times
  for (var x=1; x<5; x++) {
    for (var y=1; y<5; y++) {
      //a corresponding pair will be with the emoji chosen randomly
      if (emoji=='🌌') {
        //applied to the following statements: odd emojis are in row1 col1, row4 col3
        if(x==1 && y==1 || x==4 && y==3){txt = '🌠'}
        else{txt = '🌌'}
      }
      else if (emoji=='💫') {
        if(x==1 && y==1 || x==4 && y==3){txt = '✨'}
        else{txt = '💫'}
      }
      else if (emoji=='😎') {
        if(x==1 && y==1 || x==4 && y==3){txt = '🤩'}
        else{txt = '😎'}
      }
      else {
        if(x==1 && y==1 || x==4 && y==3){txt = '🖤'}
        else{txt = '💜'}
      }
      textSize(70);
      text(txt, 80*x, 90*y);
    }
  }
}

//deletes previous drawings when mouse is pressed
function mousePressed() {
  clear(); 
  background(random(0, 255), random(0, 255), random(0, 255)); //background is called again so bg color is not cleared
}