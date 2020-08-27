"use strict";
exports.__esModule = true;
//quantidade de números que há no array
var SomaArrayDeNumeros = [1, 2, 3, 4, 5];
for (var i = 0; i < SomaArrayDeNumeros.length; i++) {
    console.log(SomaArrayDeNumeros[i]);
}
//quantidade de números ímpares no array
var ArrayDeNumeros = [1, 2, 3, 4, 5];
function numerosImpar(array) {
    return ArrayDeNumeros.filter(function (number) { return number % 2 !== 0; });
}
var resultado = numerosImpar(ArrayDeNumeros);
console.log(resultado);
var SomaArrayNumeros = [1, 2, 3, 4, 5];
var total = SomaArrayNumeros.reduce(function (total, number) {
    return total + number;
}, 0);
console.log(total);
