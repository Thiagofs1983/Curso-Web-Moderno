// 

function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: preco - (0.1 * preco)
    }
    
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Mesa', 450.05))
