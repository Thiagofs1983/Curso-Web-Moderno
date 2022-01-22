let valor //não inicializada
console.log(valor)
valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) //Erro!!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
produto.preco = null // sem preco
console.log(!!produto.preco)
console.log(produto)

// Se quiser zerar uma referência sempre use o null e deixe o sistema definir o undefined