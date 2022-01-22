let vetor = [15, 20, 30, 9, 25, 12, 10, 40, 11, 13]

function calcularMedia (vetor) {
    let resultado = vetor[0]

    for(let i = 1; i < vetor.length; i++) {
        resultado += vetor[i]
    }
    console.log(`Média é igual a: ${(resultado / vetor.length).toFixed(2)}`)
}
calcularMedia(vetor)




//18.50