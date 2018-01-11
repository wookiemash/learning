let cols = 10;
let rows = 10;
let squareRegScale = 50;
let mapScale = squareRegScale*10+1;
let blocks = [];
let person = [];
let walls = [6, 46, 56, 78, 88, 98];
let tiles = Array((cols*rows-1));

function setup() {
  createCanvas(mapScale, mapScale);
  let index = 0;
  let x = 0;
  let y = 0;
  let endLocation = 99;
  let isWall = false;
    for (j = 0; j < rows; j++) {
      for (i = 0; i < cols; i++) {
        for (wall of walls) {
          if (wall === index) {
            isWall = true;
            break;
          } else {
            isWall = false;
          }
        }
        blocks[index] = new Block(x, y, squareRegScale, index, endLocation, isWall);
        x += squareRegScale;
        index++;
      }
      x = 0;
      y += squareRegScale;
    }
  person[0] = new Ai(-100,-100, 0, endLocation, blocks, walls);
}

function draw() {
  background(0);
  for (block of blocks) {
    block.show();
  }
  for(player of person) {
    player.act();
  }
  
}