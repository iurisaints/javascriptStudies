let input = require("fs").readFileSync("/dev/stdin", "utf8");
let lines = input.split("\n");

let pi = 3.14159;
let raio = parseFloat(lines.shift());
let area;
let resultado;
area = pi * (raio*raio)
resultado = area.toFixed(4)
console.log(`A=${resultado}`);
