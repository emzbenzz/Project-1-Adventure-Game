//public domain music

let x;
let y;
let xSpeed = 2;
let ySpeed = 1;
let gameState = "start";
let img;
let img2;
let img3;

function preload() {
  img = loadImage("images/tree1.png");
  img2 = loadImage("images/tree2.png");
  img3 = loadImage("images/wolfpack.png");
  img4= loadImage("images/tinytown.png");
}

function setup() {
  createCanvas(600, 500);
  x = 50;
  y = 50;
  frameRate(12);
}

function draw() {
  background("blue");

  // Stick figure
  text("🧍", 200, 405);
  textAlign(CENTER);

  // Moon
  fill(255, 204, 0);
  stroke(0);
  circle(350, 50, 100);

  // Crescent moon effect
  stroke("blue");
  fill("blue");
  circle(320, 50, 100);

  // Grass
  fill("rgb(50,76,50)");
  noStroke();
  rect(0, 400, 700, 600);

  // Game States
  if (gameState === "start") {
    fill(200, 200, 0);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(
      "You are standing in a field at dusk.\nA UFO is approaching.\nDo you want to run LEFT or RIGHT? \n\nRun to the left press L or Run to the right press R",
      width / 2,
      height / 2
    );
  } 
  else if (gameState === "left") {
  /*image(img2, 325, 310, 100, 100);
    image(img,  400, 300, 100, 100);
    image(img2, 350, 310, 100, 100);
    image(img,  375, 300, 100, 100);
    image(img2, 425, 310, 100, 100);
    image(img,  450, 300, 100, 100);
    image(img2, 475, 310, 100, 100);
    image(img,  500, 300, 100, 100);
    image(img2, 525, 310, 100, 100);
    image(img3, 230, 350, 100, 50);
  */
    
    // Draw alternating img2 and img across x positions
  let xPositions = [325, 350, 375, 400, 425, 450, 475, 500, 525];

  for (let i = 0; i < xPositions.length; i++) {
    let x = xPositions[i];
    let isEven = i % 2 === 0;

    if (isEven) {
      image(img2, x, 310, 100, 100); // even index: img2 at y = 310
    } else {
      image(img,  x, 300, 100, 100); // odd index: img at y = 300
    }
  }

// Draw the wolfpack image once
image(img3, 230, 350, 100, 50);
    
    fill(200, 200, 0);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text("You run left toward the forest.\nYou hear wolves start to howl.\n\nPress R to run away from the forest.",
      width / 2,
      height / 2
    );
  } 
  else if (gameState === "right") {
  image(img4,250,110, 400, 450);
    
    fill(200, 200, 0);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(
      "You run right toward the town.\nYou see headlights appear in the distance.\n\nPress F to flag down the driver and escape.",
      width / 2,
      height / 2
    );
  } 
  else if (gameState === "driver") {
    fill(200, 200, 0);
    textSize(20);
    textAlign(CENTER, BOTTOM);
    text(
      "You flag down the driver and jump in the car.\n There is no time for stranger danger.",
      width / 2,
      height / 2
    );
  }

  // UFO Animation (runs regardless of gameState)
  x += xSpeed;
  y += ySpeed;

  if (x < 0 || x > width) xSpeed *= -1;
  if (y < 0 || y > height) ySpeed *= -1;

  textSize(50);
  text("🛸", x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW || key === "l" || key === "L") {
    gameState = "left";
  } else if (keyCode === RIGHT_ARROW || key === "r" || key === "R") {
    gameState = "right";
  } else if (key === "f" || key === "F") {
    gameState = "driver";
  }
}
