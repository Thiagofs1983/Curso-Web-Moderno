const pilotos = ['Alonso', 'Massa', 'Vettel', 'Raikkonen']
/*const ultimoPiloto = pilotos.pop()
const primeiroPiloto = pilotos.shift()
console.log([primeiroPiloto, ultimoPiloto])*/

pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('Verstapen')
console.log(pilotos)

pilotos.shift() //removeo primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') //acrescenta um elemento no indice 0
console.log(pilotos)

pilotos.splice(2, 0, 'Botas', 'Raikkonen') //acrescentou 2 elementos a partir do indice 2 e não excluiu nenhum
console.log(pilotos)

pilotos.splice(3, 1) //retira 1 elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // novo array a partir do indice 1 e finalizando no indice 4, porem o indice 4 não entra
console.log(algunsPilotos2)