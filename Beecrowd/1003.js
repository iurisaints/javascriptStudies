var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const leitor = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let a;
let b;
let soma;
leitor.question("", a => {
    leitor.question("", b => {
        soma = Number(a) + Number(b)
        console.log(`SOMA = ${soma}`)
    })
})
