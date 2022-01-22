function classificacao (notas) {
    let conceitos = []
    for(i = 0; i < notas.length; i++) {
        if (notas[i] < 5) {
            conceitos.push(notas[i] + ' - Classificação D')
        }
        if (notas[i] < 7 && notas[i] >= 5) {
            conceitos.push(notas[i] + ' - Classificação C')
        }
        if (notas[i] < 9 && notas[i] >= 7) {
            conceitos.push(notas[i] + ' - Classificação B')
        }
        if (notas[i] < 10 && notas[i] >= 9) {
            conceitos.push(notas[i] + ' - Classificação A')
        }
    
}
return conceitos
}
notas = [5.1, 4.9, 3.8, 6.7, 8.9, 9.1, 2.9]

console.log(classificacao(notas))