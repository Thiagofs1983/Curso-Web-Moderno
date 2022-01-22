/*let frase = "Tentar gerar um array"
function gerarArray(frase) {
    let resultado = []
    for(var i = 0; i < frase.length; i++) {
        resultado.push(frase[i])
    }

    return resultado
    
}

console.log(gerarArray(frase))
*/

let primeiraString = "abacaxi"
let segundaString = 'uva'

function concat(primeiraString, segundaString) {
    let resultado
    if(primeiraString.length > segundaString.length) {
        resultado = primeiraString + segundaString
    } else {
        resultado = segundaString + primeiraString
    }
    return resultado
}

console.log(concat(primeiraString, segundaString))
console.log(concat("uva", "strawbarry"))