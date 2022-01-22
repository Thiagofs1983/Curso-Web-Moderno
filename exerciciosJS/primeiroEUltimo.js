function primeiroEUltimo (vetor) {
    resultado = []
    resultado.push(vetor[0], vetor[vetor.length - 1])
    return resultado
}
console.log(primeiroEUltimo([8, 2, 3, 4, 10]))