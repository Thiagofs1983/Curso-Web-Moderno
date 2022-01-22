let vetor = [4, 5, 6, 7]
let numero = 3

function multiplicacao (vetor, numero) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        resultado.push(vetor[i] * numero)
    }
    console.log(resultado)
}
multiplicacao(vetor, numero)


function multiplicacaoMaior5 (vetor, numero) {
    let resultado = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * numero)
        }
    }
    return resultado
}
console.log(multiplicacaoMaior5 (vetor, numero))