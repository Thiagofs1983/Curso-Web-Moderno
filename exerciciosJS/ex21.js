function planoSaude (idadeConveniado) {
    let mensalidade = 100
    let adicional60 = 130
    let adicional30 = 95
    let adicional10 = 50
    let adicional1 = 80

    if (idadeConveniado > 60) {
        mensalidade += adicional60
    }else if (idadeConveniado > 30) {
        mensalidade += adicional30
    }else if (idadeConveniado > 10) {
        mensalidade += adicional10
    }else if (idadeConveniado >= 0) {
        mensalidade += adicional1
    }
    return `Valor do convênio é R$${mensalidade},00`
}
console.log(planoSaude(65))
console.log(planoSaude(59))
console.log(planoSaude(28))
console.log(planoSaude(15))
console.log(planoSaude(6))