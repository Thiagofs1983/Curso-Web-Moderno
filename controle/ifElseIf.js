Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra, nota ' + nota)
    } else if(nota.entre(7, 8.99)) {
        console.log('Aprovado! sua nota é ' + nota)
    } else if(nota.entre(4, 6.99)) {
        console.log('Recuperação! Sua nota é ' + nota)
    } else if(nota.entre(0, 3.99)) {
        console.log('PQP, você é um idiota!!! Sua nota é ' + nota)
    } else {
        console.log('Nota invalida')
    }

    console.log('Fim')

    }
imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(0)
imprimirResultado(-1)