var bubbles = [];
var eyes = [];

function preload() {
  for ( var i = 0; i < 3; i++) {
    eyes[i] = loadImage('img/' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 100; i++){
    bubbles[i]
  }
}

function mousePressed() {
  var r = floor(random(0, eyes.length));
  bubbles.push(new Bubble(mouseX, mouseY, eyes[r]));
}

function draw() {
  background(127);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}