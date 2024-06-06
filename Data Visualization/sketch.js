let font,
//for csv file
data, heroes, time,
//for bg and heroes images
bg, ana, cassidy, dva, genji, junkrat, kiriko, lifeweaver, lucio, mercy, pharah, reaper, sigma, soldier, torb, tracer, widow, zen;
var colors = ['#8190B2', '#B77F82', '#F59DC9', '#9FF57D', '#F0BE7B', '#D3939B', '#E2B9C8', '#91CD7D', '#F3EEBE', '#778CC8', '#907C81', '#9BA5A8', '#80879A', '#C48886', '#DE9D7C', '#A482AA', '#F7ED92'];

function preload() {
  data = loadTable('data.csv', 'csv', 'header'); //csv file
  font = loadFont('Panton-BlackCaps.otf'); //font
  //images
  bg = loadImage('heroes/bg.png');
  ana = loadImage('heroes/ana.png');
  cassidy = loadImage('heroes/cassidy.png');
  dva = loadImage('heroes/dva.png');
  genji = loadImage('heroes/genji.png');
  junkrat = loadImage('heroes/junkrat.png');
  kiriko = loadImage('heroes/kiriko.png');
  lifeweaver = loadImage('heroes/lifeweaver.png');
  lucio = loadImage('heroes/lucio.png');
  mercy = loadImage('heroes/mercy.png');
  pharah = loadImage('heroes/pharah.png');
  reaper = loadImage('heroes/reaper.png');
  sigma = loadImage('heroes/sigma.png');
  soldier = loadImage('heroes/soldier.png');
  torb = loadImage('heroes/torb.png');
  tracer = loadImage('heroes/tracer.png');
  widow = loadImage('heroes/widow.png');
  zen = loadImage('heroes/zen.png');
}

function setup() {
  createCanvas(1000, 1200);
  
  //array of hero img variables to access automatically via for loop
  heroImg = [ana, cassidy, dva, genji, junkrat, kiriko, lifeweaver, lucio, mercy, pharah, reaper, sigma, soldier, torb, tracer, widow, zen];
  
  //get data from csv file
  heroes = data.getColumn("Hero");
  time = data.getColumn("Time Played (Minutes)");
  
  //convert time values to float for hrs conversion
  for (let i = 0; i < time.length; i++) {
    time[i] = float(time[i]);
  }
}

function draw() {
  background(bg);
  translate(90, 80);
  textFont(font);
  push();
    textSize(40);
    text('My Overwatch Heroes and Time Played', 0, 0);
  pop();
  
  //CHART
  push();
    translate(50, 30);
  let maxTime = Math.max(...time); //find max time in minutes to display proportionate time value bars length. ('...' or spread operator gets the values in the array to pass into Math.max())

  for (var i=0; i < time.length; i++) {
    var mappedData = map(time[i], 0, maxTime, 0, 500); //map time relative to the maximum time
    //BAR BG
    noStroke();
    fill(255);
    rect(0, (i * 60), 200, 50, 5, 0, 0, 5); //name bar (last 4 arguments are corner radius)
    fill(255, 100);
    rect(0, (i * 60), 700, 50, 5); //time bar (last arg is corner radius)
    
    //TIME VALUE BAR
    fill(colors[i]);
    rect(200, (i * 60) + 5, mappedData, 40, 0, 5, 5, 0); //bar (last 4 args are corner radius)
    
    image(heroImg[i], 0, i * 60, 50, 50); //hero img
    
    //TEXTS
    textSize(13);
    push();
      fill(50);
      textAlign(RIGHT);
      //display time in hours or minutes
      let timeText;
      //if time value is or greater than 60, convert it to hrs, else retain mins form
      if (time[i] >= 60) {
        timeText = time[i] / 60 + ' Hrs'
      } else {
        timeText = time[i] + ' Mins'
      }
      text(timeText, 690, (i * 60) + 30); //time value
    pop();
    fill(0);
    text(heroes[i], 60, (i * 60) + 30); //hero name
  }
  pop();
}