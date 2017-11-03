var mover;
var maxMag;
var maxDir;
var origin;
var movers = [];
var minNodeSize = 5;
var maxNodeSize = 20;
var nodeCount = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  origin = createVector(0,0);
  maxDir = createVector(width/2,height/2);
  maxMag = maxDir.mag();
	
	nodeCount = int((width / 80) * (height / 80));

  var Mover = function() {
    this.position = createVector(Math.random() * width, Math.random() * height);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.vector = createVector(0,0);
		this.hitArea = 100;
		this.size = int(random(minNodeSize, maxNodeSize));
  };

  Mover.prototype.update = function(xPos, yPos) {
    var newPosition = this.vector;

    if (xPos && yPos) {
      newPosition = createVector(xPos, yPos);  
    }
    
    var dir = p5.Vector.sub(newPosition, this.position);
    var closeness = (maxMag - dir.mag()) / maxMag;
    dir.normalize();
    dir.mult(closeness);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
  };

  Mover.prototype.display = function() {
    fill(255);
    strokeWeight(1);
    ellipse(this.position.x, this.position.y, this.size, this.size);
  };
  
  Mover.prototype.checkBoundary = function(connectionNode) {
    var distance = dist(this.position.x, this.position.y, connectionNode.position.x, connectionNode.position.y);
    if (distance < this.hitArea) {
      strokeWeight(.25);
      line(this.position.x, this.position.y, connectionNode.position.x, connectionNode.position.y);
    }
  };

  Mover.prototype.checkEdges = function() {
    if (this.position.x > windowWidth) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = windowWidth;
    }
  
    if (this.position.y > windowHeight) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = windowHeight;
    }
  };

  for (var i = 0; i < 200; i++) {
    movers.push(new Mover());
  }
}

function draw() {
	background('#e6e6e6');
  
  
  for (var i = 0; i < nodeCount; i++) {
		var randX = (Math.random() * width - 40) + 20;
		var randY = (Math.random() * height - 40) + 20
    movers[i].update(randX, randY);
    
    movers[i].checkEdges();
    movers[i].display();  
		
    for (var j = i; j < nodeCount; j++) {
      movers[i].checkBoundary(movers[j]);
    }
  }
  
  fill(255, 0, 0);
  //text(maxMag, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
