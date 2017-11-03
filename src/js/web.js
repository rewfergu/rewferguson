// vars
  int width = 800;
  int height = 600;
  int gridSize = 35;
  int cols = width / gridSize;
  int rows = height / gridSize;
  Node[] nodes = new Node[cols*rows];

  void setup() {
     size(width, height);
     ellipseMode(CENTER);
     noiseDetail(100);
     int i = 0;
     for (int j = 0; j < rows; j++) {
      for (int k = 0; k < cols; k++) {
        // set grid
        int xPos = (k*gridSize) + gridSize/2;
        int yPos = (j*gridSize) + gridSize/2;

        // alter grid with noise
        xPos *= random(1, 2);
        yPos *= random(1 , 2);

        //println(xPos);
        nodes[i] = new Node(xPos, yPos, int(random(2,15)), gridSize, i+1);
        i++;
      }
     }

     background(0);
     fill(255);
     noStroke();
     frameRate(30);
  }

  void draw() {
    background(230);
    // draw points
    for (int i = 0; i < cols*rows; i++) {
     nodes[i].display();
    }

    // draw lines
    for (int i = 0; i < cols*rows; i++) {
      for (int j = i; j < cols*rows; j++) {
        nodes[i].checkBoundary(nodes[j]);
      }
    }
  }
                                  
  class Node {
    float xPos;
    float yPos;
    int size;
    int hitArea;
    float thisPosition;

    float frequency = .001;
    float noiseInterval = PI;

    Node(int start_x, int start_y, int start_size, int hit_area_bounds, int myPosition) {
      xPos = start_x;
      yPos = start_y;
      size = start_size;
      hitArea = hit_area_bounds;
      thisPosition = myPosition;
    }

    void display(){
      xPos = map(noise(thisPosition*noiseInterval + frameCount * frequency),0,1,-width,width+width);
      yPos = map(noise(thisPosition*noiseInterval+1 + frameCount * frequency),0,1,-height,height+height);
      fill(255);
      ellipse(xPos, yPos, size, size);
    }

    void checkBoundary(Node connectionNode) {
      float distance = dist(xPos, yPos, connectionNode.xPos, connectionNode.yPos);
      if (distance < hitArea) {
       stroke(55);
       strokeWeight(1);
       line(xPos, yPos, connectionNode.xPos, connectionNode.yPos);
      }
      // check inside hit area
      // double loops
    }
  }