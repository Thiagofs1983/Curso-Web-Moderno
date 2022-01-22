function calculadora (num1, operacao, num2) {
    switch (operacao) {
        case "+": 
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case '/':
            console.log(num1 / num2)
            break
        default:
            console.log("Invalido") 
            break       
    }
}
calculadora(1, '+', 2)
calculadora(1, '-', 2)
calculadora(1, '*', 2)
calculadora(1, '/', 2)
calculadora(1, '%', 2)
calculadora(4, '+', 2)