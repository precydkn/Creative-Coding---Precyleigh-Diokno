/* - added a script in html for the p5.sound library
  - used style.css to style BUTTONS*/

let bass, beat, vocals, other, //music stems (sound sources)
    amp, amp1, amp2, amp3, amp4, //for amplitude for all and for each music stem
    fft, //for FFT
    cd, bg, topImg, botImg, txt,
    musicPlaying = false, //music is initially not playing ; for the CD rotation
    songEnded = false, //music hasn't started nor ended
    rotateBy = 0, //CD isn't rotating initially
    currentAngle = 0; //track the current angle of the CD

function preload() {
  //images
  cd = loadImage('img/cd.png');
  bg = loadImage('img/cwy.png');
  topImg = loadImage('img/top.png');
  botImg = loadImage('img/bot.png');
  //music audios
  bass = loadSound('stems/bass.mp3');
  beat = loadSound('stems/drums.mp3');
  vocals = loadSound('stems/vocals.mp3');
  other = loadSound('stems/other.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); //window size
  
  //create amplitudes to be connected to each music stem
  amp = new p5.Amplitude(); //for waveform (not connected to a specific source)
  amp1 = new p5.Amplitude();
  amp2 = new p5.Amplitude();
  amp3 = new p5.Amplitude();
  amp4 = new p5.Amplitude();
  
  fft = new p5.FFT(); //FFT for waveform
  
  //MUSIC PLAYER BUTTONS
  //play/pause button
  txt = '▶'
  play = createButton(txt);
  play.position(width/2, height-50); //bottom-center position
  play.size(60, 60);
  play.mousePressed(toggleMusic); //call func to play/pause music if button is pressed
  //stop button
  stop = createButton('◼'); 
  stop.position(width/2 - 60, height-50);
  stop.size(60, 60);
  stop.mousePressed(stopMusic); //call func to play/pause music if button is pressed
}

function draw() {
  background(0);
  imageMode(CENTER);
  image(topImg, width/2, 130);
  image(botImg, width/2, height/2 + 300);
  image(bg, width/2, height/2, 706.12, 300);
  
  //connect each music stem to each amp
  amp1.setInput(bass);
  amp2.setInput(beat);
  amp3.setInput(vocals);
  amp4.setInput(other);
  
  //get amp sound level to map
  lvl1 = amp1.getLevel();
  lvl2 = amp2.getLevel();
  lvl3 = amp3.getLevel();
  lvl4 = amp4.getLevel();
  
  //map sizes for each music stem
  let Bass = map(lvl1, 0, 1, 10, 200),
      Beat = map(lvl2, 0, 1, 10, 200),
      Vocals = map(lvl3, 0, 1, 10, 200),
      Other = map(lvl4, 0, 1, 10, 200);

  //BASS 
  fill('#446E7A');
  ellipse(width/4 - 200, height/4, Bass, Bass);
  //BEAT
  fill('#C3996E');
  ellipse(width*3/4 + 200, height/4, Beat, Beat);
  //VOCALS
  fill('#D6DBDC');
  ellipse(width/4 - 200, height*3/4, Vocals, Vocals);
  //OTHER
  fill('#F3DFD0');
  ellipse(width*3/4 + 200, height*3/4, Other, Other);
  
  //RADIAL WAVEFORM
  let wave = fft.waveform();
  push();
  translate(width/2, height/2); //center the circle
  stroke(225);
  strokeWeight(2);
  noFill();
  //draw the radial waveform (left and right arcs)
  for (var t = -1; t <= 1; t += 2) {
    beginShape();
    for (var i = 0; i <= 180; i += 0.5) {
      var index = floor(map(i, 0, 180, 0, wave.length - 1));
      var r = map(wave[index], -7, 6.5, 10, 300);
      var x = r * sin(i) * t;
      var y = r * cos(i);
      vertex(x, y)
    }
    endShape();
  }
  pop();
  
  //CD
  push();
  translate(windowWidth/2, windowHeight/2); //translate origin to center of screen so cd rotation is at its own center
  imageMode(CENTER);
  angleMode(DEGREES);

  if (musicPlaying) {
    rotateBy = 0.3;
    currentAngle += rotateBy; //update current angle based on rotation speed
  }
  
  rotate(currentAngle); //rotate based on current angle
  image(cd, 0, 0, 300, 300);
  pop();
  
  //if current time of audio greater than 147.8 (actual song duration is 147.904), it means the song has ended (we can just check one audio since they all have the same duration)
  if (bass.currentTime() >= 147.8) endSong();
}

//FUNC to PLAY/PAUSE music
function toggleMusic() {
  if (bass.isPlaying() && beat.isPlaying() && vocals.isPlaying()) {
    bass.pause();
    beat.pause();
    vocals.pause();
    other.pause();
    musicPlaying = false;
    
    txt = '▶';
  } else {
    bass.play();
    beat.play();
    vocals.play();
    other.play();
    musicPlaying = true;
    
    txt = '❚❚';
  }
  play.html(txt); //update play/pause button text
}

//FUNC to STOP music
function stopMusic() {
  bass.stop();
  beat.stop();
  vocals.stop();
  other.stop();
  musicPlaying = false;
  currentAngle = 0; //reset CD angle
  
  //return play symbol to button
  txt = '▶';
  play.html(txt);
}

//FUNC when song ENDS: stops all music and resets button and CD angle
function endSong() {
  bass.stop();
  beat.stop();
  vocals.stop();
  other.stop();
  musicPlaying = false;
  currentAngle = 0;

  //update play button label to '▶'
  txt = '▶';
  play.html(txt);
}

//resize canvas to window size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}