const leitor = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
let a;
let b;
let x;
leitor.question("", a => {
    leitor.question("", b =>{
        x = a + b;
        console.log(`X = ${c}`);
    })
})
