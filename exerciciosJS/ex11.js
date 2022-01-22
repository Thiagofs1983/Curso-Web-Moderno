function anoBisexto (ano) {
    if (ano % 400 == 0) {
        return `${ano} é Bisexto ${true}`
    } else if(ano % 100 == 0) {
        return `${ano} não é Bisexto ${false}`
    } else if (ano % 4 == 0) {
        return `${ano} é Bisexto ${true}`
    } else {
        return `${ano} não é Bisexto ${false}`
    }
}
console.log(anoBisexto(200))
console.log(anoBisexto(4))
console.log(anoBisexto(100))
console.log(anoBisexto(400))
console.log(anoBisexto(800))
console.log(anoBisexto(2000))
console.log(anoBisexto(2020))
console.log(anoBisexto(2021))
