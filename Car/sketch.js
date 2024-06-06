function setup() {
  createCanvas(700, 700); 
  makeCar(); // call makeCar() here in setup() so canvas is not blank on run
}

function mouseReleased() {makeCar() /*so color changes every mouse press */}

// function that draws the car. was made to be easily called by setup() and mouseReleased()
function makeCar() {
  background(random(255), random(255), random(255));
  strokeWeight(2);
    fill(random(255), random(255), random(255)); // BODY COLOR
    rect(62, 327, 570, 100); // BOT BODY
    quad(219, 238, 459, 238, 553, 327, 124, 327); // TOP BODY
    // BACK WHEEL
    fill(0); // OUTER COLOR
    circle(162, 432, 100); // OUTER
    fill(200); // INNER COLOR
    circle(162, 432, 60); // INNER

    // FRONT WHEEL
    fill(0); // OUTER COLOR
    circle(532, 432, 100); // OUTER
    fill(200); // INNER COLOR
    circle(532, 432, 60); // INNER

    rect(44, 410, 18, 15); // PIPE

    fill(200, 50, 60); // BACK LIGHT COLOR
    rect(62, 377, 30, 26); // BACK LIGHT

    fill(255, 200, 0); // FRONT LIGHT COLOR
    rect(602, 377, 30, 26); // FRONT LIGHT

    fill(0, 210, 255);
    quad(232, 253, 332, 253, 332, 313, 166, 313); // BACK WINDOW
    quad(350, 253, 450, 253, 515, 313, 350, 313); // FRONT WINDOW

    fill(230); // HANDLE COLOR
    rect(354, 344, 30, 10); // HANDLE
}