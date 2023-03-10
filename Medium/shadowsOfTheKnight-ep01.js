/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(" ");
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);

// game loop
let pos = { x: X0, y: Y0 };

let limit = { u: 0, d: H - 1, l: 0, r: W - 1 };

while (true) {
  const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
  const { x, y } = pos;

  if (bombDir.includes("U")) {
    limit.d = y - 1;
  }
  if (bombDir.includes("D")) {
    limit.u = y + 1;
  }
  if (bombDir.includes("L")) {
    limit.r = x - 1;
  }
  if (bombDir.includes("R")) {
    limit.l = x + 1;
  }

  pos = {
    x: Math.floor((limit.r - limit.l) / 2) + limit.l,
    y: Math.floor((limit.d - limit.u) / 2) + limit.u,
  };

  // the location of the next window Batman should jump to.
  console.log(`${pos.x} ${pos.y}`);
}
