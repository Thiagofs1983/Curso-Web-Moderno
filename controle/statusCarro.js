var statusCarro = "desligado"
var acelerar = 0
var rotacaoDoVolante = 0

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado"
    } else {
        statusCarro = "desligado"
    }
    
    return statusCarro
    
}


function acelerando(incremento) {
    acelerar = acelerar + incremento
    return "Acelerando o carro a " + acelerar + "m/s²"

}

function desacelerando(decremento) {
    acelerar = acelerar - decremento
    return "desacelerando o carro a " + acelerar + 'm/s²'
}

function girarVolante(graus) {
    rotacaoDoVolante = rotacaoDoVolante + graus + 'º'
}

ligarDesligar();
console.log(statusCarro)
girarVolante(45)
console.log(rotacaoDoVolante)