const arr = [1, 2, 3, 4, 5]
const n = 2
// function arrayDeNumeros() { 
//      const array = arr.length
//      return arr.length
// }

// const result = arrayDeNumeros()
// console.log(arr)
// console.log(result)


// function arrayDeNumeros() {
//     if(arr.length < n ){
//        return arr
//     }
// }

// const result = arrayDeNumeros()
// console.log(result)

// Escreva uma função que receba um array e devolva o maior e o menor elemento dele.


function pegaMaiorEMenor(arr) {
    let maior = arr[0];
    let menor = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maior) {
        maior = arr[i];
      } else if (arr[i] < menor) {
        menor = arr[i];
      }
    }
    console.log("O maior é: ", maior);
    console.log("O menor é: ", menor);
  }
  
  pegaMaiorEMenor([4, 10, 17, 98, 23, 100, 29, -10])