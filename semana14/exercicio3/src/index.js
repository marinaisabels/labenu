"use strict";
//Crie uma função que receba dois parâmetros: um array de posts e um autor. Ela deve devolver todos os posts deste autor
exports.__esModule = true;
var primeiroPost = {
    autor: "Maria",
    posts: "Olá"
};
var segundoPost = {
    autor: "Andre",
    posts: "Oi"
};
var terceiroPost = {
    autor: "João",
    posts: "Hey"
};
var quartoPost = {
    autor: "Helena",
    posts: "E ai?"
};
// Crie um array com 5 objetos deste tipo de posts
var postsNasRedesSociais = [primeiroPost, segundoPost, terceiroPost, quartoPost];
function post(array, autor) {
    var postDoUsuario = postsNasRedesSociais.filter(function (redesocial) { return redesocial.autor === autor; });
    return postDoUsuario;
}
var resultado = post(postsNasRedesSociais, "");
console.log(resultado);
