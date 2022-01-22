function classificacaoTriangulo (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
        return 'Isóceles'
    } else {
        return 'Escaleno'
    }
    
}
console.log(classificacaoTriangulo(2, 2, 2))
console.log(classificacaoTriangulo(2, 3, 2))
console.log(classificacaoTriangulo(2, 3, 4))