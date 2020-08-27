import { totalmem } from "os"

//quantidade de números que há no array
const SomaArrayDeNumeros: number[] = [1, 2, 3, 4, 5]
for (let i = 0; i < SomaArrayDeNumeros.length; i++){
console.log(SomaArrayDeNumeros[i])
}

//quantidade de números ímpares no array
const ArrayDeNumeros: number[] = [1, 2, 3, 4, 5]

function numerosImpar(array: number[]): number[]{
   return ArrayDeNumeros.filter(number => number % 2!== 0)
   
}

const resultado = numerosImpar(ArrayDeNumeros)
console.log(resultado)

const SomaArrayNumeros: number[] = [1, 2, 3, 4, 5]
    const total = SomaArrayNumeros.reduce(function(total, number){
        return total + number;
    }, 0);
console.log(total);


