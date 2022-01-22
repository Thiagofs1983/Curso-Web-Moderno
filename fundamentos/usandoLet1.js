let numero = 1 //usa o escopo de bloco, função
{ 
    let numero = 2
    console.log("dentro =", numero)

}
console.log("fora =", numero)