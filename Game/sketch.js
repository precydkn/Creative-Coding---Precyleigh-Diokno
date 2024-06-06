let dino, //player
    cacti = [], //for obstacle class
    jumpForce = -19, //jump height
    score = 0,
    goal = 300, //target score to win
    gameOver = false, //game state tracker
    gameState = 'start', //initial game state
    win = false, //to check wwhich game over message to show
    font,
    //images
    bg,
    idle,
    running,
    jumping,
    live,
    dead,
    groundImage,
    obstacle, c1, c2, c3,
    //audios
    menuBgm, gameBgm, winBgm, winSfx, loseSfx, jumpSfx,
    gameBgmPlaying = false,
    winSfxPlaying = false,
    loseSfxPlaying = false;//so audios are called/played once

function preload() {
  font = loadFont('retro-land-mayhem.ttf');
  //images
  bg = loadImage('img/bg.png');
  idle = loadImage('img/idle.gif');
  running = loadImage('img/normalRun.gif');
  jumping = loadImage('img/jump.png');
  dead = loadImage('img/dead.gif');
  live = loadImage('img/jump.gif');
  groundImage = loadImage('img/ground.png');
  c1 = loadImage('img/cactus.png');
  c2 = loadImage('img/cactus-1.png');
  c3 = loadImage('img/cactus-2.png');  
  //audios
  gameBgm = loadSound('audio/game.MP3');
  winSfx = loadSound('audio/win.MP3');
  loseSfx = loadSound('audio/lose.MP3');
  jumpSfx = loadSound('audio/jump.MP3');
}

function setup() {
  createCanvas(800, 400);
  dino = new Dino();
}

function draw() {
  //if score reaches target score, game is over and player wins
  if (int(score) >= goal) {
    gameState = 'gameOver';
    win = true;
  }

  background(bg); //clear the background each frame for proper rendering

  //display screens according to gameState
  if (gameState === 'start') {
    startScreen();
  } else if (gameState === 'playing') {
    gameScreen();
    //display target score
    textAlign(LEFT);
    textSize(24);
    fill(0);
    text('Goal: ' + goal, 10, 60);
  } else if (gameState === 'gameOver') {
    gameOverScreen();
  }
}

//actions according to key pressed
function keyPressed() {
  //shift to start game
  if (keyCode === 16 && gameState === 'start') gameState = 'playing'
  //jump if arrow up is pressed during gameplay
  if (keyCode === 38 && gameState === 'playing') {
    dino.jump();
    jumpSfx.play();
  }
  //shift to restart game during game over
  if (keyCode === 16 && gameState === 'gameOver') {
    restartGame();
    gameState = 'start';
  }
}

//START SCREEN
function startScreen() {
  background(bg);
  fill(0);
  image(groundImage, -30, 310, 900, 120); //ground image
  dino.show(); //display player
  
  textFont(font);
  textAlign(CENTER);
  //"Dino Game"
  textSize(60);
  text('Dino Game', width/2, height/2 - 70);
  //instructions
  textSize(20);
  text('Shift to start', width/2, height/2 + 80);
  textSize(12);
  text('to jump', width/2, height/2 + 100);
  //because the custom font can't output the arrow symbols, use diff font
  push();
  textFont('Arial');
  textAlign(LEFT);
  textSize(18);
  text('↑', width/2 - 50, height/2 + 100);
  pop();
}

//GAME SCREEN
function gameScreen() {
  background(bg);
  image(groundImage, -30, 310, 900, 120); //ground image
  //update and display dino
  dino.update();
  dino.show();
  
  //play music
  if (!gameBgmPlaying) {
    gameBgm.play();
    gameBgm.loop();
    gameBgm.setVolume(0.4);
    gameBgmPlaying = true;
  }
  
  //update and display obstacles
  if (frameCount % 100 === 0) cacti.push(new Cactus());
  for (let cactus of cacti) {
    cactus.update();
    cactus.show();
  }

  //check for collisions and change game state if there are
  for (let cactus of cacti) {
    if (dino.collision(cactus)) {
      gameOver = true;
      gameState = 'gameOver'
    }
  }

  //update & display score
  if (!gameOver) {
    score += 0.15; //increases while game is running
    textSize(24);
    fill(0);
    textAlign(LEFT);
    text('Score: ' + floor(score), 10, 25); //used floor to get integer of score
  }
}

//GAME OVER SCREEN
function gameOverScreen() {
  background(0);
  //stop gameBgm
  gameBgm.stop();
  gameBgmPlaying = false;
  
  textSize(48);
  textAlign(CENTER);
  let col, img;
  //if player wins, text is green and sfx is win, else text is red and sfx is lose
  if (win === true) {
    text('YOU WIN!', width/2, 160);
    col = 'green';
    img = live;

    if (!winSfxPlaying) {
      winSfx.play();
      winSfxPlaying = true;
    }
  } else {
    text('YOU LOSE...', width/2, 160);
    col = 'red';
    img = dead;
    //play loseSfx
    if (!loseSfxPlaying) {
      loseSfx.play();
      loseSfxPlaying = true;
    }
  }
  //game over message + score + goal
  fill(col);
  text('Game Over', width/2, 100);
  textSize(30);
  text(`Score: ${floor(score)}   Goal: ${goal}`, width/2, 300); //template literal to insert score and goal values
  //restart instruction
  push();
  fill(255);
  textSize(20);
  text('Shift to restart', width/2, 330);
  image(img, width/2 - 50, height/2 -10); //dead dino
  pop();
}

//RESTART GAME: reset all values
function restartGame() {
  cacti = [];
  score = 0;
  dino = new Dino(); 
  gameOver = false;
  win = false;
  gameBgmPlaying = false;
  winSfxPlaying = false;
  loseSfxPlaying = false;
  //in case they restart while sfx are still playing
  winSfx.stop();
  loseSfx.stop();
}

//PLAYER
class Dino {
  constructor() {
    this.x = 50;
    this.y = 250;
    this.size = 50;
    this.velocity = 0; //vertical movement of player (using this.y will make jump fall stiff)
    this.gravity = 1; //to bring dino back down after jumping
    this.onGround = true;
  }
  
  //JUMP MECHANICS
  jump() {
    if (this.onGround) {
      this.velocity = jumpForce;
      this.onGround = false;
    }
  }
  
  //COLLISION MECHANICS
  collision(obstacle) {
    let dinoRight = this.x + this.size;
    let dinoBottom = this.y + this.size;

    //check for collision on the left and top sides of the obstacle
    let collisionX = this.x < obstacle.x + obstacle.width - 10 && dinoRight > obstacle.x - 8;
    let collisionY = this.y < obstacle.y + obstacle.height + 10 && dinoBottom > obstacle.y + 8;

    return collisionX && collisionY;
  }
  
  //update dino movement (jump)
  update() {
    this.velocity += this.gravity; //bring dino down to ground
    this.y += this.velocity;
    //if player y pos is less greater than 250 (ground level), velocity = 0 and player is on ground
    if (this.y > 250) {
      this.y = 250;
      this.velocity = 0;
      this.onGround = true;
    }
  }
  
  //dino images
  show() {
    if (gameState === 'start') image(idle, this.x, this.y); //idle gif on start screen
    else if (this.onGround == true) image(running, this.x, this.y); //running gif in-game
    else image(jumping, this.x, this.y); //jumping gif on jump 
  }
}

//OBSTACLE
class Cactus {
  constructor() {
    this.x = width;
    this.y = 210;
    this.width = 74;
    this.height = 95;
    this.baseSpeed = 8; //initial speed at start of game
    this.speed = this.baseSpeed; //for increasing speed mechanic

    //select a random image for this cactus
    let obstacleImages = [c1, c2, c3];
    this.image = random(obstacleImages);
  }

  //SPEED MECHANICS: increment speed every 100 points (check if score is divisible by 100)
  increaseSpeed() {
    this.speed = this.baseSpeed + floor(score / 100);
  }

  //make cactus move
  update() {
    this.increaseSpeed(); //updating speed based on the score
    this.x -= this.speed;
  }

  //cactus image
  show() {
    image(this.image, this.x, this.y, 77, 100);
  }
}