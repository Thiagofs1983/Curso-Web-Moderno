function sacarDinheiro (valorDoSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorDoSaque)

    while (valorDoSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorDoSaque -= 100
                contador100++
                break
            case 50:
                valorDoSaque -= 50
                contador50++
                break
            case 10:
                valorDoSaque -= 10
                contador10++
                break
            case 5:
                valorDoSaque -= 5
                contador5++
                break
            case 1:
                valorDoSaque -= 1
                contador1++
                break
        }
       
        valorNota = calcularValorNota(valorDoSaque)
        
    }
    return resultadoTotal(contador100, contador50, contador10, contador5, contador1)

}

function calcularValorNota (valorDoSaque) {
    if (valorDoSaque >= 100) {
        return 100
    }else if (valorDoSaque >= 50) {
        return 50
    }else if (valorDoSaque >= 10) {
        return 10
    }else if (valorDoSaque >= 5) {
        return 5
    }else if(valorDoSaque >= 1) {
        return 1
    }
    
}

function resultadoTotal (contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$100,00\n`
        
    } if(contador50 > 0) {
        resultado += `${contador50} nota(s) de R$50,00\n`

    }if(contador10 > 0) {
        resultado += `${contador10} nota(s) de R$10,00\n`

    } if(contador5 > 0) {
        resultado += `${contador5} nota(s) de R$5,00\n`

    } if(contador1 > 0) {
        resultado += `${contador1} notas(s) de R$1,00\n`
    }
    return resultado
}


console.log(sacarDinheiro(1880))























/*
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(sacarDinheiro(153));
*/