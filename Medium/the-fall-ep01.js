/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const W = parseInt(inputs[0]); // number of columns.
const H = parseInt(inputs[1]); // number of rows.
const lines = {};
for (let i = 0; i < H; i++) {
  const LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
  lines[i] = LINE.split(" ");
}
const EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
  var inputs = readline().split(" ");
  const XI = parseInt(inputs[0]);
  const YI = parseInt(inputs[1]);
  const POS = inputs[2];

  const currentCellType = lines[YI][XI];

  let X = XI;
  let Y = YI;

  switch (currentCellType) {
    case "1":
      Y = YI + 1;
      break;
    case "2":
      X = POS === "LEFT" ? XI + 1 : XI - 1;
      break;
    case "3":
      X = XI;
      Y = YI + 1;
      break;
    case "4":
      if (POS === "TOP") {
        X = XI - 1;
      }
      if (POS === "RIGHT") {
        Y = YI + 1;
      }
      break;
    case "5":
      if (POS === "TOP") {
        X = XI + 1;
      }
      if (POS === "LEFT") {
        Y = YI + 1;
      }
      break;
    case "6":
      X = POS === "LEFT" ? XI + 1 : XI - 1;
      break;
    case "7":
    case "8":
    case "9":
      Y = YI + 1;
      break;
    case "10":
      X = XI - 1;
      break;
    case "11":
      X = XI + 1;
      break;
    case "12":
    case "13":
      Y = YI + 1;
      break;
  }
  console.log(`${X} ${Y}`);
}
