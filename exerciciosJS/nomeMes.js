function mes (numero) {
    switch (numero) {
        case 1:
            return 'Janeiro'
            break
        case 2:
            return 'Fevereiro'
            break
        default:
            return 'Mês invalido'
    }
}
console.log(mes(1))
console.log(mes(3))
console.log(mes(2))