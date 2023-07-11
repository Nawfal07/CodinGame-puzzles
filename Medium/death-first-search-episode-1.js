/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(" ");
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

const graph = new Map();
for (let node = 0; node < N; node++) {
  graph.set(node, []);
}

for (let i = 0; i < L; i++) {
  var inputs = readline().split(" ");
  const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
  const N2 = parseInt(inputs[1]);
  graph.get(N1).push(N2);
  graph.get(N2).push(N1);
}
const gateways = [];
for (let i = 0; i < E; i++) {
  const EI = parseInt(readline()); // the index of a gateway node
  gateways.push(EI);
}

// game loop
while (true) {
  const SI = parseInt(readline()); // The index of the node on which the Bobnet agent is positioned this turn

  // Write an action using console.log()
  // To debug: console.error('Debug messages...');

  const bobNetAdjacents = graph.get(SI);
  const gatewaysAdjacents = gateways.map((g) => graph.get(g)).flat();
  const isClose = bobNetAdjacents.filter((elt) => gateways.includes(elt));

  let exitPop = bobNetAdjacents[0];
  if (isClose.length) {
    exitPop = isClose[0];
  } else {
    const danger = bobNetAdjacents.filter((elt) =>
      gatewaysAdjacents.includes(elt)
    );

    if (danger.length) {
      exitPop = danger[0];
    }
  }
  console.log(`${SI} ${exitPop}`);
}
