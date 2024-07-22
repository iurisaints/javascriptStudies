let enquanto = true
let soma = 0

while(enquanto){
    let num = Number(prompt(`Insira um número, se inserir 0 o programa finaliza.: `))
    if(num !== 0){
        soma += num
    } else {
        alert(`Soma: ${soma}`)
        console.log(soma)
    }
}
