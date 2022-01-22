let vetor = [15, 20, 30, 9, 25, 12, 10, 40, 11, 13]

function maiorMenor (vetor) {
    let maiorValor = vetor[0]
    let menorValor = vetor[0]
    //let resultado = []

    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maiorValor) {
            maiorValor = vetor[i]
        }
        if (vetor[i] < menorValor) {
            menorValor = vetor[i]
        }
        
    }
    //return [maiorValor, menorValor]

    console.log(`Maior valor: ${maiorValor} e menor valor: ${menorValor}`)
}
//console.log(maiorMenor(vetor))
maiorMenor(vetor)