function sistemaNotas (notas) {
    let notaCorrigida = arredondar(notas)

    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Reprovado com nota ${notas}`)
    } 
}

function arredondar(notas) {
    if(notas % 5 > 2) {
        return notas + (5 - (notas % 5))
    } else{
        return notas
    }
}

sistemaNotas(100)
sistemaNotas(39)
sistemaNotas(38)
sistemaNotas(44)
sistemaNotas(29)
sistemaNotas(79)
sistemaNotas(77)
sistemaNotas(18)