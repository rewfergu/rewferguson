export default function sketch(p) {
  var gridBlock = 50;
  var x = gridBlock / 2;
  var y = 0;
  var translate_x;
  var translate_y;
  var angle;
  var angleOffset = 0;
  var flipFlop = 1;

  var currentPath = 3;
  // 0 = up
  // 1 = right
  // 2 = down
  // 3 = left

  var previousAnchor = 0;
  // 0 = topleft
  // 1 = topright
  // 2 = bottomright
  // 3 = bottomleft

  var updown = [0, 2];
  var leftright = [1, 3];

  var currentRotation = [1, -1]; // 1 = clockwise, -1 = counterclockwise

  p.setup = () => {
    // background(250);
    p.background(0);
    p.ellipseMode(p.CENTER);
    p.noStroke();
    p.frameRate(60);
    p.createCanvas(p.windowWidth, p.windowHeight);
    translate_x = p.width / 2;
    translate_y = p.height / 2;
  };

  p.draw = () => {
    p.fill('rgba(255,255,255,0.04)');
    p.rect(-10, -10, p.width + 10, p.height + 10);
    p.fill(0);
    angle = (p.frameCount * 5) % 90;

    // angle reset
    if (angle == 0) {
      // up
      //*********************
      if (currentPath == 0) {
        // set random rotation
        if (translate_x >= p.width - gridBlock * 2) {
          flipFlop = -1;
        } else if (translate_x <= 0 + gridBlock * 2) {
          flipFlop = 1;
        } else {
          flipFlop = currentRotation[p.int(p.random(2))];
        }

        // clockwise
        if (flipFlop == 1) {
          //bottomright cw
          //*********************
          x = -gridBlock / 2;
          y = 0;
          if (previousAnchor == 0) {
            translate_x += gridBlock;
            translate_y += 0;
          } else if (previousAnchor == 1) {
            translate_x += 0;
            translate_y += 0;
          }
          previousAnchor = 2;
          currentPath = 1;
          // console.log('bottomright cw');

          // counter clockwise
        } else {
          //bottomleft acw
          //*********************
          x = gridBlock / 2;
          y = 0;
          if (previousAnchor == 0) {
            translate_x += 0;
            translate_y += 0;
          } else if (previousAnchor == 1) {
            translate_x += -gridBlock;
            translate_y += 0;
          }
          previousAnchor = 3;
          currentPath = 3;
          // console.log('bottomleft acw');
        }

        // right
        //*********************
      } else if (currentPath == 1) {
        // set random rotation
        if (translate_y >= p.height - gridBlock * 2) {
          flipFlop = -1;
        } else if (translate_y <= 0 + gridBlock * 2) {
          flipFlop = 1;
        } else {
          flipFlop = currentRotation[p.int(p.random(2))];
        }

        if (flipFlop == 1) {
          //bottomleft cw
          //*********************
          x = 0;
          y = -gridBlock / 2;
          if (previousAnchor == 1) {
            translate_x += 0;
            translate_y += gridBlock;
          } else if (previousAnchor == 2) {
            translate_x += 0;
            translate_y += 0;
          }
          previousAnchor = 3;
          currentPath = 2;
          // console.log('bottomleft cw');
        } else {
          //topleft acw
          //*********************
          x = 0;
          y = gridBlock / 2;
          if (previousAnchor == 1) {
            translate_x += 0;
            translate_y += 0;
          } else if (previousAnchor == 2) {
            translate_x += 0;
            translate_y += -gridBlock;
          }
          previousAnchor = 0;
          currentPath = 0;
          // console.log('topleft acw');
        }

        // down
        //*********************
      } else if (currentPath == 2) {
        // set random rotation
        if (translate_x >= p.width - gridBlock * 2) {
          flipFlop = 1;
        } else if (translate_x <= 0 + gridBlock * 2) {
          flipFlop = -1;
        } else {
          flipFlop = currentRotation[p.int(p.random(2))];
        }

        if (flipFlop == 1) {
          //topleft cw
          //*********************
          x = gridBlock / 2;
          y = 0;
          if (previousAnchor == 2) {
            translate_x += -gridBlock;
            translate_y += 0;
          } else if (previousAnchor == 3) {
            translate_x += 0;
            translate_y += 0;
          }
          previousAnchor = 0;
          currentPath = 3;
          // console.log('topleft cw');
        } else {
          //topright acw
          //*********************
          x = -gridBlock / 2;
          y = 0;
          if (previousAnchor == 2) {
            translate_x += 0;
            translate_y += 0;
          } else if (previousAnchor == 3) {
            translate_x += gridBlock;
            translate_y += 0;
          }
          previousAnchor = 1;
          currentPath = 1;
          // console.log('topright acw');
        }

        // left
        //*********************
      } else {
        // set random rotation
        if (translate_y >= p.height - gridBlock * 2) {
          flipFlop = 1;
        } else if (translate_y <= 0 + gridBlock * 2) {
          flipFlop = -1;
        } else {
          flipFlop = currentRotation[p.int(p.random(2))];
        }

        if (flipFlop == 1) {
          //topright cw
          //*********************
          x = 0;
          y = gridBlock / 2;
          if (previousAnchor == 0) {
            translate_x += 0;
            translate_y += 0;
          } else if (previousAnchor == 3) {
            translate_x += 0;
            translate_y += -gridBlock;
          }
          previousAnchor = 1;
          currentPath = 0;
          // console.log('topright cw');
        } else {
          //bottomright acw
          //*********************
          x = 0;
          y = -gridBlock / 2;
          if (previousAnchor == 0) {
            translate_x += 0;
            translate_y += gridBlock;
          } else if (previousAnchor == 3) {
            translate_x += 0;
            translate_y += 0;
          }
          previousAnchor = 2;
          currentPath = 2;
          // console.log('bottomright acw');
        }
      }
    } // end angle

    p.push();
    p.translate(translate_x, translate_y);
    p.fill('rgb(230, 230, 230)');
    // fill('rgb(200,200,200)');
    p.ellipse(0, 0, 35, 35);
    p.rotate(p.radians((angle + angleOffset) * flipFlop));
    p.fill('#000');
    p.ellipse(x, y, 6, 6);
    p.fill(250, 0, 0);
    p.pop();
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}
