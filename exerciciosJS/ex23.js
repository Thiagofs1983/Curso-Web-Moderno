function classificacaoAluno (codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Código do Aluno: ${codAluno}, Notas: ${nota1}, ${nota2}, ${nota3}. Média: ${mediaFinal}. O aluno foi ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)   
}
classificacaoAluno(123, 6, 2.8, 3.5)
classificacaoAluno(123, 6, 5, 4.55)