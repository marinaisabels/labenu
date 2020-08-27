"use strict";
exports.__esModule = true;
var fs = require("fs");
var __1 = require("..");
var __2 = require("..");
var __3 = require("..");
var FileManager = /** @class */ (function () {
    function FileManager(filePath) {
        this.filePath = filePath;
    }
    FileManager.prototype.setFilePath = function (path) {
        this.filePath = path;
    };
    FileManager.prototype.writeFile = function (data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    };
    FileManager.prototype.readFile = function () {
        var data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    };
    return FileManager;
}());
exports.FileManager = FileManager;
var missions = new FileManager("missions.json");
var students = new FileManager("students.json");
var teachers = new FileManager("teachers.json");
// imprime as infos do arquivo
// console.log(missions.readFile());
// console.log(students.readFile());
// console.log(teachers.readFile());
// fm.setFilePath("outro-arquivo");
// escreve no arquivo
// NÃO SEI SE ISSO TA CERTO :(
missions.writeFile([__1.class1, __1.class2]);
students.writeFile([__2.newStudent, __2.newStudent2]);
teachers.writeFile([__3.teacher1, __3.teacher2, __3.teacher3, __3.teacher4]);
console.log(missions, students, teachers);
