const LON = parseFloat(readline().replace(",", "."));
const LAT = parseFloat(readline().replace(",", "."));

const N = parseInt(readline());

const distances = [];
for (let i = 0; i < N; i++) {
  const DEFIB = readline();

  const [_number, name, _address, _contact, lonDEF, latDEF] = DEFIB.split(";");

  const fLonDEF = parseFloat(lonDEF.replace(",", "."));
  const fLatDEF = parseFloat(latDEF.replace(",", "."));

  const x = (LON - fLonDEF) * Math.cos((fLatDEF + LAT) / 2);
  const y = LAT - fLatDEF;
  const d = Math.pow(x, 2) + Math.pow(y, 2);

  distances.push({ name, distance: d });
}

console.log(
  distances.sort((a, b) => {
    return a.distance - b.distance;
  })[0].name
);
