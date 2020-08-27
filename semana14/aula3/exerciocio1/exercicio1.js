"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
//Lê um diretório 
fs_1.readdir("./textos", function (err, files) {
    console.log(files);
});
var Promise1 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/1.txt", handleFileRead);
});
var Promise2 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/2.txt", handleFileRead);
});
var Promise3 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/3.txt", handleFileRead);
});
var Promise4 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/4.txt", handleFileRead);
});
var Promise5 = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("./textos/5.txt", handleFileRead);
});
Promise.all([Promise1, Promise2, Promise3, Promise4, Promise5])
    .then(function (result) {
    console.log("Eu não acredito que isso ta certo", result);
})["catch"](function (err) {
    console.error("Deu errado :(!");
});
