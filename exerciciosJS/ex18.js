function numeroPorExtenso (numeros) {
    switch (numeros) {
        case 0: 
            return 'zero'
            break
        case 1: 
            return 'um'
            break
        case 2: 
            return 'dois'
            break
        case 3: 
            return 'três'
            break
        case 4:
            return 'quatro'
            break
        case 5:
            return 'cinco'
            break
        default:
            return 'Numero inválido'
            break
    }
}
console.log(numeroPorExtenso(0))
console.log(numeroPorExtenso(5))
console.log(numeroPorExtenso(56))
console.log(numeroPorExtenso(3))
console.log(numeroPorExtenso(2))
console.log(numeroPorExtenso(6))