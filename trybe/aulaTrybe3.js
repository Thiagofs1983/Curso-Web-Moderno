function fizzbuzz(n) {
    for(var i = 1; i <= n; i++) {    
    //console.log(i)
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    } else if(i % 3 == 0 && i % 5 != 0) {
        console.log('Fizz')
    } else if(i % 3 != 0 && i % 5 == 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
    }
}
fizzbuzz(15)
console.log('--------------------')
fizzbuzz(30)





/*if(n % 3 == 0 && n % 5 == 0) {
            console.log("FizzBuzz")
        } else if(n % 3 == 0 && n % 5 != 0) {
            console.log("Fizz")
        } else if(n % 3 != 0 && n % 5 == 0) {
            console.log("buzz")
        } else {
            console.log(n)
        }
    }*/