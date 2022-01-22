var chances = [2, 4, 6, 8, 10]

function multiplicaNumeros(chances) {
    var resultado =  []
    for (var i = 0; i < chances.length; i++) {
        resultado.push(chances[i] * 3)
        
    } 
    return resultado
}
console.log(multiplicaNumeros([2, 4, 6, 8, 10]))
