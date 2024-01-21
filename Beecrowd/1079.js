var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x = Number(lines.shift());

let arrayResultados = [];

for (let i = 0; i < x; i++) {
    let linhaInicial = lines.shift();
    let linha = linhaInicial.split(' ');

    let media = (parseFloat(linha[0]) * 2 + parseFloat(linha[1]) * 3 + parseFloat(linha[2]) * 5) / 10;

    arrayResultados.push(media);
}

for (let i = 0; i < x; i++) {
    console.log(arrayResultados[i].toFixed(1));
}
