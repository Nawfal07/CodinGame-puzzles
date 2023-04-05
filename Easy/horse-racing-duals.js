const N = parseInt(readline());
const horses = [];
for (let i = 0; i < N; i++) {
  const pi = parseInt(readline());
  horses.push(pi);
}

let d = Infinity;
horses
  .sort((a, b) => a - b)
  .forEach((horse, index) => {
    if (index > 0 && horse - horses[index - 1] < d) {
      d = horse - horses[index - 1];
    }
  });

console.log(d);
