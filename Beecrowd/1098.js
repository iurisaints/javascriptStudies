var a = 0
var j = 1
p = 0
for(let i = 1; i < 12; i += 1){
    if (a === 0 || a === 1){
        console.log(`I=${a} J=${j+p}`);
        console.log(`I=${a} J=${j+1+p}`);
        console.log(`I=${a} J=${j+2+p}`);
    } else if (a > 1.9) {
        console.log(`I=2 J=${j+p}`);
        console.log(`I=2 J=${j+1+p}`);
        console.log(`I=2 J=${j+2+p}`);
    } else {
        console.log(`I=${a.toFixed(1)} J=${(j+p).toFixed(1)}`);
        console.log(`I=${a.toFixed(1)} J=${(j+1+p).toFixed(1)}`);
        console.log(`I=${a.toFixed(1)} J=${(j+2+p).toFixed(1)}`);
    }
    a += 0.2
    p += 0.2
}
