/*function simboloMais (num) {
    let resultado = '';
    for(let i = 0; i < num; i++)
    resultado += "+"
    return resultado
}*/

function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
    }

console.log(simboloMais(2))
console.log(simboloMais(5))
console.log(simboloMais(10))