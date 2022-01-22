/*function estaEntre (numero, minimo, maximo, inclusivo) {
    if(inclusivo == true) {
        if(numero >= minimo && numero <= maximo) {
            return true
        } else {
            return false
        }
    }else {
        if(numero > minimo && numero < maximo) {
            return true
        } else {
            return false
        }
    }
}*/

function estaEntre (numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(2, 3, 150, true))
console.log(estaEntre(3, 3, 150, true))
console.log(estaEntre(3, 3, 150))
console.log(estaEntre(4, 3, 150))

