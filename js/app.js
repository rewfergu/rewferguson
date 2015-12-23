var gridSize;
var cols;
var rows;
var nodeArray = [];
var multiplier = 2;
var minNodeSize;
var maxNodeSize;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // adjust this based on screen size
  gridSize = 100;

  cols = width / gridSize;
  rows = height / gridSize;

  // size of circles
  maxNodeSize = width / 50;
  minNodeSize = maxNodeSize / 2;

  ellipseMode(CENTER);
  noiseDetail(100);
  background(0);
  fill(255);
  strokeWeight(1);
  stroke('rgba(0,0,0,.5)');
  frameRate(30);

  var i = 0;
  for (var j = 0; j < rows; j++) {
    for (var k = 0; k < cols; k++) {
      // set grid
      var xPos = (k * gridSize) + gridSize / 2;
      var yPos = (j * gridSize) + gridSize / 2;

      // alter grid with noise
      xPos *= random(1, 2);
      yPos *= random(1, 2);

      //println(xPos);
      nodeArray[i] = new ItemNode(xPos, yPos, int(random(minNodeSize, maxNodeSize)), gridSize, i + 1);
      i++;
    }
  }
}

function draw() {
  background(230);

  // draw points
  for (var i = 0; i < cols * rows; i++) {
    nodeArray[i].display();
  }

  // draw lines
  // iterate over each item in the array
  for (var is = 0; is < cols * rows; is++) {
    // for each item in the outer array, iterate over all the other elements
    // we set the var to the above position because anything before that has already been checked
    for (var j = is; j < cols * rows; j++) {
      nodeArray[is].checkBoundary(nodeArray[j]);
    }
  }
}

var ItemNode = function(start_x, start_y, start_size, hit_area_bounds, myPosition) {
  this.xPos = start_x;
  this.yPos = start_y;
  var size = start_size;
  var hitArea = hit_area_bounds;
  var thisPosition = myPosition;

  var frequency = 0.0025;
  var noiseInterval = PI;
  // var noiseInterval = 1;

  this.display = function() {
    this.xPos = map(noise(thisPosition * noiseInterval + frameCount * frequency), 0, 1, -100, width + 100);
    this.yPos = map(noise(thisPosition * noiseInterval + 1 + frameCount * frequency), 0, 1, -100, height + 100);
    fill(255);
    strokeWeight(1);
    ellipse(this.xPos, this.yPos, size, size);
  };

  this.checkBoundary = function(connectionNode) {
    var distance = dist(this.xPos, this.yPos, connectionNode.xPos, connectionNode.yPos);
    if (distance < hitArea) {
      //stroke(0);
      strokeWeight(.25);
      line(this.xPos, this.yPos, connectionNode.xPos, connectionNode.yPos);
    }
  };
};

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
