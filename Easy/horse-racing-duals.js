const N = parseInt(readline());
const horses = [];

// Read input and populate array
for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  horses.push(pi);
}

// Sort array in ascending order
horses.sort((a, b) => a - b);

// Find minimum difference between any two adjacent elements in sorted array
let minDiff = Infinity;
for (let i = 1; i < horses.length; i++) {
  const diff = horses[i] - horses[i - 1];
  if (diff < minDiff) {
    minDiff = diff;
  }
}

console.log(minDiff);
