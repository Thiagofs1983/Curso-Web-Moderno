const valores = [7.7, 8.9, 6.3, 9.2] //criando a variavel com colchetes [] significa que está criando um array
console.log(valores[0], valores[3])
console.log(valores[2])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // diz quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') //adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) //retira o ultimo item no array
delete valores [0] //apaga o valor do indice indicado
console.log(valores)
console.log(typeof valores)

valores.push("thiago")
console.log(valores)