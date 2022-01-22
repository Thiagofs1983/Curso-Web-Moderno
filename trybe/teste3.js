var frase = "The Lord of The Rings"
var letra = "o"

function vezesLetraRepete (frase, letra) {
    var total = 0
    for(var index = 0; index < frase.length; index++) {
        var resultado = frase[index]
        
        if (resultado == letra) {
            total++
        }

    }
    return total
}
console.log(vezesLetraRepete('The Lord of The Rings', 'o'))
console.log("")










let frase1 = "Heitor, meu filho lindo"
let letra1 = "o"

function vezesLetraRepete2(frase1, letra1) {
    let total = 0
    for(let i = 0; i < frase1.length; i++){
        if(frase1[i] == letra1) {
            total++
        }
    }
    return total
}
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "o"))
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "H"))
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "e"))
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "i"))
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "t"))
console.log(vezesLetraRepete2("Heitor, meu filho lindo", "l"))