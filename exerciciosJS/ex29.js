let vetor = [15, 20, 30, 9, 25, 12, 10, 40, 11, 13]
console.log(vetor.length)
function dentroFora (vetor) {
    let dentro = 0
    let fora = 0

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            dentro++
        } else {
                fora++
            }
            
        }
        console.log(`${dentro} Números dentro e ${fora} números fora.`)
}

dentroFora(vetor)