/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

const map = {};
for (let i = 0; i < N; i++) {
  var inputs = readline().split(" ");
  const EXT = inputs[0]; // file extension
  const MT = inputs[1]; // MIME type.
  map[EXT.toLowerCase()] = MT;
}

for (let i = 0; i < Q; i++) {
  const FNAME = readline(); // One file name per line.
  if (FNAME.includes(".")) {
    const ext =
      map[FNAME.split(".")[FNAME.split(".").length - 1].toLowerCase()];
    console.log(ext || "UNKNOWN");
  } else {
    console.log("UNKNOWN");
  }
}
