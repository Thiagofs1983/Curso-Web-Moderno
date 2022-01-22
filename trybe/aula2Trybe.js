function operadoresLogicos(elementoA, elementoB) {
    if(elementoA > elementoB) {
        console.log('Elemento A maior que elemento B')
    } else {
        console.log('Elemento B maior que elemento A')
    }
}

operadoresLogicos(5, 10)
operadoresLogicos(10, 5)


function operadoresLogicos1(elementoA, elementoB) {
    if(elementoA > elementoB) {
        return 'Elemento A maior que elemento B'
    } else {
        return 'Elemento B maior que elemento A'
    }
}

console.log(operadoresLogicos1(5, 10))
console.log(operadoresLogicos1(10, 5))