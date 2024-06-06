function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("#360E60");
  stroke(0);
  strokeWeight(1.8);
  
  translate(width / 2 - 150, 20)
  
  // STAR L
  //fill(100); 
  fill("#C35A1F");
  beginShape();
  vertex(51, 3);
  bezierVertex(52, 2, 55, -2, 59, 3);
  vertex(83, 31);
  bezierVertex(84, 32, 85, 33, 86, 33);
  vertex(122, 35);
  bezierVertex(124, 35, 127, 37, 124, 43);
  vertex(120, 49);
  vertex(52, 124);
  bezierVertex(42, 131, 36, 134, 36, 128);
  vertex(32, 90);
  bezierVertex(32, 89, 31, 87, 30, 86);
  vertex(30, 86);
  vertex(3, 63);
  bezierVertex(1, 62, -1, 59, 3, 56);
  vertex(37, 41);
  bezierVertex(37, 40, 39, 40, 39, 38);
  vertex(51, 3);
  endShape();
  
  
  // HAIR L
  //fill(40);
  fill("#7C3711");
  ellipse(102, 104, 113, 113);
  

  // STAR R
  //fill(100);
  fill("#C35A1F");
  beginShape();
  vertex(229, 4);
  bezierVertex(233, -1, 236, 2, 237, 4);
  vertex(249, 38);
  bezierVertex(250, 40, 251, 41, 251, 41);
  vertex(285, 56);
  bezierVertex(289, 60, 287, 62, 285, 64);
  vertex(257, 87);
  bezierVertex(257, 88, 255, 89, 256, 90);
  vertex(252, 129);
  bezierVertex(252, 135, 246, 131, 168, 50);
  bezierVertex(164, 43, 161, 37, 164, 36);
  vertex(166, 35);
  vertex(202, 33);
  bezierVertex(204, 33, 205, 32, 205, 32);
  vertex(229, 4);
  endShape();
    
  
  // HAIR R
  //fill(40);
  fill("#7C3711");
  ellipse(183, 103, 113, 113);
  

  // BODY
  noStroke();
  fill(10);
  beginShape();
  line(123, 193, 165, 193);
  vertex(165, 193);
  vertex(165, 237);
  bezierVertex(165, 239, 168, 241, 172, 241)
  vertex(235, 255);
  bezierVertex(237, 255,242, 257, 241, 264);
  vertex(228, 328);
  vertex(222, 355);
  vertex(66, 355)
  bezierVertex(60, 328, 49, 272, 47, 264);
  bezierVertex(47, 264, 46, 257, 51, 255);
  bezierVertex(53, 255, 117, 241, 120, 241);
  bezierVertex(123, 239, 123, 237, 123, 195);
  endShape();
  
  
  // HEAD
  //fill(150)
  stroke(0);
  fill("#BAE1DE")
  ellipse(144, 128, 129, 140);  

  
  // EYE
    // scelera fill
  noStroke();
  //fill(120);
  fill("#BB2929");
  beginShape();
  vertex(84, 116);
  bezierVertex(103, 105, 141, 84, 145, 87);
  bezierVertex(150, 84, 187, 104, 205, 116);
  bezierVertex(194, 122, 157, 145, 145, 143);
  bezierVertex(132, 145, 99, 121, 84, 116);
  endShape();
  
    // iris
  noStroke();  
  //fill(200)
  fill("#D4C85D");
  ellipse(145, 115, 56, 56);
  
    // pupil
  //fill(255);
  fill("#8B4AAA");
  ellipse(145, 115, 36, 36);
  fill("#0E706D");
  ellipse(145, 115, 10, 10);
  
  
    // scelera ouline (so that the outline is over the iris as well)
  stroke(0);
  noFill();
  beginShape();
  vertex(84, 116);
  bezierVertex(103, 105, 141, 84, 145, 87);
  bezierVertex(150, 84, 187, 104, 205, 116);
  bezierVertex(194, 122, 157, 145, 145, 143);
  bezierVertex(132, 145, 99, 121, 84, 116);
  endShape();
  
    // eyelashes
  beginShape();
  vertex(119, 135);
  bezierVertex(116, 136, 111, 141, 114, 145);
  endShape();
  
  beginShape();
  vertex(128, 140);
  bezierVertex(127, 140, 124, 143, 124, 148);
  endShape();
  
  beginShape();
  vertex(159, 141);
  bezierVertex(161, 141, 164, 143, 164, 150);
  endShape();
  
  beginShape();
  vertex(166, 138);
  bezierVertex(168, 139, 172, 143, 172, 148);
  endShape();
  
  
  // CHEEK L
  beginShape();
  vertex(108, 140);
  bezierVertex(110, 142, 114, 149, 110, 155);
  bezierVertex(107, 161, 102, 162, 100, 161);
  bezierVertex(96, 161, 90, 158, 91, 150);
  bezierVertex(92, 142, 99, 141, 102, 142);
  bezierVertex(105, 143, 110, 147, 106, 152);
  bezierVertex(101, 157, 98, 154, 97, 152);
  bezierVertex(97, 151, 96, 148, 99, 146);
  bezierVertex(101, 144, 103, 146, 103, 147);
  bezierVertex(104, 148, 103, 150, 101, 150);
  endShape();
  
  // CHEEK R
  beginShape();
  vertex(181, 140);
  bezierVertex(179, 142, 175, 149, 179, 155);
  bezierVertex(182, 161, 188, 162, 190, 161);
  bezierVertex(193, 161, 199, 158, 198, 150);
  bezierVertex(197, 142, 191, 141, 188, 142);
  bezierVertex(185, 143, 180, 147, 184, 152);
  bezierVertex(188, 157, 191, 154, 192, 152);
  bezierVertex(193, 151, 193, 148, 191, 146);
  bezierVertex(189, 144, 187, 146, 186, 147);
  bezierVertex(186, 148, 186, 150, 188, 150);
  endShape();
  
  
  // MOUTH
  stroke(0)
  line(138, 172, 152, 172);

}