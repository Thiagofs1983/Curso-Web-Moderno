const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) //qualquer texto e/ou atributo dentro do JSON deve estar entre aspas duplas.

//para testar JSON pode ir ao site JSON validator