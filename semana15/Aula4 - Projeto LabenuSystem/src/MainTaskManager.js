"use strict";
exports.__esModule = true;
var moment = require("moment");
var MainTaskManager = /** @class */ (function () {
    function MainTaskManager(name, email, curso, birthDate, classroom, specialties, hobbies) {
        this.name = name;
        this.email = email;
        this.curso = curso;
        this.birthDate = birthDate;
        this.classroom = classroom;
        this.specialties = specialties;
        this.hobbies = hobbies;
    }
    MainTaskManager.prototype.getAge = function () {
        return moment().diff(this.birthDate, "years");
    };
    MainTaskManager.prototype.execute = function () {
    };
    MainTaskManager.prototype.getAllStudents = function () {
        console.log("<" + this.name + ">");
        console.log("<" + this.email + ">");
        console.log("<" + this.curso + ">");
        console.log("<" + this.classroom + ">");
        console.log("<" + this.birthDate + ">");
    };
    MainTaskManager.prototype.getAllTeachers = function () {
        console.log("<" + this.name + ">");
        console.log("<" + this.email + ">");
        console.log("<" + this.birthDate + ">");
        console.log("<" + this.specialties + ">");
    };
    return MainTaskManager;
}());
exports.MainTaskManager = MainTaskManager;
