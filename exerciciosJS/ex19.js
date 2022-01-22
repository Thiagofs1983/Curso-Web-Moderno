function lanchonete (codItem, quant) {
    switch (codItem) {
        case 100:
            return `Cachorro Quente R$ ${(quant * 3).toFixed(2).toString(). replace('.', ',')}`
            break
        case 200:
            return `Hamburguer Simples R$ ${(quant * 4).toFixed(2).toString(). replace('.', ',')}`
            break
        case 300:
            return `Cheesburguer R$ ${(quant * 5.5).toFixed(2).toString(). replace('.', ',')}`
            break
        case 400:
            return `Bauru R$ ${(quant * 7.5).toFixed(2).toString(). replace('.', ',')}`
            break 
        case 500:
            return `Refrigerante R$ ${(quant * 3.5).toFixed(2).toString(). replace('.', ',')}`
            break   
        case 600:
            return `Suco R$ ${(quant * 2.8).toFixed(2).toString(). replace('.', ',')}`
            break
        default:
            return 'Produto não existente'
    }
    }
    console.log(lanchonete(100, 2))
    console.log(lanchonete(200, 2))
    console.log(lanchonete(300, 2))
    console.log(lanchonete(400, 2))
    console.log(lanchonete(500, 2))
    console.log(lanchonete(600, 2))
    console.log(lanchonete(700, 2))