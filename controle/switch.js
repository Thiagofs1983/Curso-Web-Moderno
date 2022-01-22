const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra, nota ' + nota)
            break
        case 8:
        case 7:
            console.log('Aprovado, nota ' + nota)
            break
        case 6: case 5: case 4:
            console.log('Recuperação, nota ' + nota)
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado, nota ' + nota)
            break
        default:
            console.log('Nota invalida')


    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.5)
imprimirResultado(4)
imprimirResultado(3.9)
imprimirResultado(2)