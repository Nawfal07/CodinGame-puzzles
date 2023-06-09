const MESSAGE = readline();

const binary_message = MESSAGE.split("")
  .map(function (char) {
    return char.charCodeAt(0).toString(2).padStart(7, "0");
  })
  .join("")
  .split("");

let currentChar = binary_message[0];
const s = [currentChar === "0" ? "00" : "0"];

let numChar = ["0"];

for (let i = 1; i < binary_message.length; i++) {
  if (binary_message[i] === currentChar) {
    numChar.push("0");
  } else {
    currentChar = binary_message[i];
    s.push(numChar.join(""));
    s.push(currentChar === "0" ? "00" : "0");
    numChar = ["0"];
  }

  if (i === binary_message.length - 1 && numChar.length) {
    s.push(numChar.join(""));
  }
}

console.log(s.join(" "));
