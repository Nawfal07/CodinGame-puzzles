const L = parseInt(readline());
const H = parseInt(readline());
let T = readline();

for (let i = 0; i < H; i++) {
  const ROW = readline();
  let s = "";
  T.split("").forEach((l) => {
    let n = l.toUpperCase().toString().charCodeAt(0) - "A".charCodeAt(0);
    let startIndex = n < 0 ? ROW.length - L : n * L;
    s += ROW.substring(startIndex, startIndex + L);
  });
  console.log(s);
}
