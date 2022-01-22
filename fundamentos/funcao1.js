// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN = Not a Number
imprimirSoma(2, 3, 4, 5) //Usa apenas as 2 primeiras variaveis declaradas e ignora as outras
imprimirSoma()

//Funcao com retorno
function soma(a, b = 1) {
    return a +b
}
console.log(soma(2, 3))
console.log(soma(2))