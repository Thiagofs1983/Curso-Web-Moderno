function valoresImpares (inicio = 0, fim = 100) {
    if (inicio > fim) {
        inicio = inicio + fim
        fim = inicio - fim
        inicio = inicio - fim
    }


    while (inicio < fim) {
        if (inicio % 2 != 0) {
            console.log(inicio)
           
        }
        inicio++
    }
    
}

valoresImpares(75, 33)
//inicio = 7
//fim = 3

//inicio = 10
//fim = 7
//