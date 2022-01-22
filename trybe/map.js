let numeros = [2, 4, 6, 8, 10]

let mult = numeros.map(function(e) {
    return e * 3
})
console.log(mult)

let resultados = {
    alunos: {
        nome: 'Thiago',
        nota: mult[3]
    }
}

console.log(resultados.alunos)

let resultado = []
for(let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * numeros[0])
    
}
console.log(resultado)