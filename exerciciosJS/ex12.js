function calcularFatorial (numero) {
    let fatorial = numero
    let resultado = fatorial

    for(let i = 1; i < numero; i++) {
        resultado *= i
    }
    console.log(`Fatorial de ${numero} é ${resultado}`)
}
calcularFatorial(5)
calcularFatorial(10)




function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(5))
console.log(fatorial(0))