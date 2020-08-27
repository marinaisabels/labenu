"use strict";
exports.__esModule = true;
var Commerce_1 = require("./Commerce");
var Residence_1 = require("./Residence");
var Industry_1 = require("./Industry");
// 2. A - O erro foi "Não podemos criar uma instância para uma classe abstrata"
// B - As filhas da classe Place podem implementar métodos dela mas não fazer uma instância por ela.
// 3. 1 - Acho que se as filhas da classe Place implementar os métodos dela, elas podem fazer uma instância delas considerando estes métodos.
// 2- Por que a interface não pode definir métodos ou comportametos, por isso a Place precisa ser uma classe para ter essas possibilidade.
// 3- Ela é uma classe abstrata porque defini métodos que podem ser utilizados em outras subclasses.
var getCepCommerce = new Commerce_1.Commerce(10, "06753340");
// console.log(getCepCommerce)
getCepCommerce.getCep();
var getCepResidence = new Residence_1.Residence(20, "06872356");
// console.log(getCepResidence)
getCepResidence.getCep();
var getCepIndustry = new Industry_1.Industry(15, "04687123");
// getCepIndustry.getCep()
console.log(getCepIndustry.getCep());
// 4.
