// a

let array = [1, 2, 3, 4]

function arrayDeNumeros(array) {
    let sum = 0;
    let multiply = 1;

    for(let i = 0; i < array.length; i++){
         sum + array[i]
    }
    for(let i = 0; i < array.length; i++){
        multiply* array[i]
   }
    return {
        sum, 
        multiply
    }

}

// b - Utilizando o reduce

let maior = array.map(Number).reduce(function(a, b){
   return Math.max(a, b) 
})

console.log(maior)

let menor = array.map(Number).reduce(function(a, b){
    return Math.min(a, b) 
 })

 console.log(menor)