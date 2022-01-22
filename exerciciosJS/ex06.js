function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    resultado = capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)
    console.log(`R$ ${resultado.toFixed(2).toString().replace('.', ',')}`)
}

jurosSimples(1000, 0.10, 2)

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    resultado = capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
    console.log(`R$ ${resultado.toFixed(2).toString().replace('.', ',')}`)
}

jurosCompostos(1000, 10/100, 24)