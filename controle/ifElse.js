const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('APROVADO!!! Sua nota é = ' + nota)
    }   else {
        console.log('REPROVADO!!! Sua nota é = ' + nota)

        }
}

imprimirResultado(10)
imprimirResultado(6.8)
imprimirResultado('EPA') //cuidado!!!