function salarioMes (qtdeHorasTrabalhadas, salarioHora) {
    console.log(`Salário igual a R$${(qtdeHorasTrabalhadas * salarioHora).toFixed(2).replace('.', ',')}`)
}
salarioMes(150, 40.5)

