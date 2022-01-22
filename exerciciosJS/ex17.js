function salario (plano, salario) {
    switch (plano) {
        case 'A':
            return salario + (salario * 0.10)
            break
        case 'B':
            return salario + (salario * 0.15)
            break
        case 'C':
            return salario + (salario * 0.20)
            break
        default:
            return 'Plano inválido'
    }
}
console.log(salario('A', 5000))
console.log(salario('B', 5000))
console.log(salario('C', 5000))
console.log(salario('D', 5000))