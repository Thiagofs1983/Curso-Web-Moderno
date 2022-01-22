var frase = "The Lord of The Rings"
var letra = "o"

//for (var index = 0; index < frase.length; index++) {
//    var element = frase[index]
 //   console.log(frase[index])
//}

function vezesLetraAparece (frase, letra) {
    var total = 0
    for (var index = 0; index < frase.length; index++) {
        var element = frase[index];
        
        if (element == letra) {
            total++
        }
    }
    return total

}
console.log(vezesLetraAparece("The Lord of The Rings", "o"))