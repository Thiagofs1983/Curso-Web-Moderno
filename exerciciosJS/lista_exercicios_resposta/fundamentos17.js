function calcularReajuste(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido.'
    }
}

console.log(calcularReajuste('A', 5000));
console.log(calcularReajuste('B', 5000));
console.log(calcularReajuste('C', 5000));
console.log(calcularReajuste('D', 1000));
