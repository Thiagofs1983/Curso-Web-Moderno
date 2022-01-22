const nums = [1, 2, 3, 4, 5]

// for com proposito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

let resultado1 = []
for(let i = 0; i < nums.length; i++) {
    resultado1.push(nums[i] * 3)
    }
console.log(resultado1)

let resultado2 = nums.map(function(e2) {
    return e2 * 4
})

console.log(resultado2)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

let resultado4 = nums.map(function(e3) {
    return e3 * 10
})
console.log(resultado4)