const n = parseInt(readline());
const m = parseInt(readline());
const inputSignals = {};
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const inputName = inputs[0];
  const inputSignal = inputs[1];
  inputSignals[inputName] = inputSignal;
}
const outputs = {};
for (let i = 0; i < m; i++) {
  var inputs = readline().split(" ");
  const outputName = inputs[0];
  const type = inputs[1];
  const inputName1 = inputs[2];
  const inputName2 = inputs[3];
  outputs[outputName] = `${type}-${inputName1}-${inputName2}`;
}

const getSignal = (sig) => {
  return sig === "-";
};

const calculate = (op, sig1, sig2) => {
  return sig1
    .split("")
    .map((s, i) => {
      return decypherSignal(op, s, sig2[i]) ? "-" : "_";
    })
    .join("");
};

const decypherSignal = (operator, sig1, sig2) => {
  switch (operator) {
    case "AND":
      return getSignal(sig1) && getSignal(sig2);
    case "OR":
      return getSignal(sig1) || getSignal(sig2);
    case "XOR":
      return getSignal(sig1) ^ getSignal(sig2);
    case "NAND":
      return !(getSignal(sig1) && getSignal(sig2));
    case "NOR":
      return !(getSignal(sig1) || getSignal(sig2));
    case "NXOR":
      return !(getSignal(sig1) ^ getSignal(sig2));
    default:
      return false;
  }
};

for (const s in outputs) {
  const [operator, s1, s2] = outputs[s].split("-");
  const inputSig = [inputSignals[s1], inputSignals[s2]];
  console.log(`${s} ${calculate(operator, ...inputSig)}`);
}
