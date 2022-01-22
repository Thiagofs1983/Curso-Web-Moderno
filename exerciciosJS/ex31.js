let vetor = [-15, 20, -30, 9, -25, 12, -10, 40, -11, 13]


function numerosNegativos (vetor) {
    resultado = 0
    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            resultado++
        }
        
    }
    console.log(resultado)

}
numerosNegativos(vetor)