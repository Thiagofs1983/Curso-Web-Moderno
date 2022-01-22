function anuidade (mes, valorAnuidade) {
    if (mes > 0 && mes < 13) {
        atraso = mes - 1
        return `Valor a ser pago R$ ${(valorAnuidade * ((1 + (0.05)) ** atraso)).toFixed(2)}`
    }else {
        return 'Mês inválido'
    }
}
console.log(anuidade(12, 1000))