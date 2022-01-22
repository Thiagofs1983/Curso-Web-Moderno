let numeros = [10, 12, 13, 11, 14, 15, 16, 17, 18, 19, 20]

function numerosPares (numeros) {
    let pares = 0
    let impares = 0
    for(let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0){
            pares++
        }else{
            impares++
        }
        
    }
    console.log(`Numeros pares ${pares}, Númeors impares ${impares}`)
    
}
numerosPares(numeros)