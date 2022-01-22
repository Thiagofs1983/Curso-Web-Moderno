/*function repeticoes (param1, param2) {
    let resultado = [];
    for (let i = 0; i < param2; i++)
    resultado.push(param1);
    return resultado
}*/

function repeticoes (param1, param2) {
    return Array(param2).fill(param1)
}



console.log(repeticoes('thiago', 3))
console.log(repeticoes(4, 3))
console.log(repeticoes(1, 3))
console.log(repeticoes('opa', 3))