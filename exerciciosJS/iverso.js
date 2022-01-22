function inverso (valor) {
    if(valor == true || valor == false) {
        return !valor
    }
    if(typeof valor == "number") {
        return -valor
    }
    else{
        return `Booleano ou Number, mas o parametro ${valor.toUpperCase()} é do tipo string`
    }
}

console.log(inverso(true))
console.log(inverso(false))
console.log(inverso(5))
console.log(inverso(-5))
console.log(inverso("casa"))