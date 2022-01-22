const escola = "Cod3r"

console.log(escola.charAt(4)) //Sempre começa a contar a partir de zero. Por isso retorna o 4 retornou a letra "r"

console.log(escola.charAt(5)) //retorna um valor vazio, não gerando um erro. Porém não é aconselhavel usar
console.log(escola.charCodeAt(3))

console.log(escola.indexOf("3"))

console.log(escola.substring(1)) //retorna o valor da variavel a partir do caracter 1
console.log(escola.substring(0, 3)) //retorna o valor da variavel 0 até o 3, não incluindo o índice 3

console.log("Escola ".concat(escola).concat("!"))
console.log("Escola " + escola + "!")

console.log("Escola ".concat(escola).concat("! ").concat("A melhor escola de Dev."))

console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/, "e"))

console.log("Ana,Maria,Pedro".split(","))