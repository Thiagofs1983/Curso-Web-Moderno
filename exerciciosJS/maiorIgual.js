function maiorOuIgual (num1, num2) {
    if (num1 >= num2 && typeof num1 === typeof num2) {
        return true
    } else {
        return false
    }
}
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(1, 5))
console.log(maiorOuIgual(5, 1))