var a = 1
var j = 7
for(let i = 1; i < 10; i += 2){
    console.log(`I=${a*i} J=${j}`);
    console.log(`I=${a*i} J=${j-1}`);
    console.log(`I=${a*i} J=${j-2}`);
    j += 2
}
