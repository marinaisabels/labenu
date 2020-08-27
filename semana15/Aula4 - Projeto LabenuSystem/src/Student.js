"use strict";

exports.__esModule = true;
var moment = require("moment");
var Student = /** @class */ (function () {
    function Student(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var moment = require("moment");
var MainTaskManager_1 = require("./MainTaskManager");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, email, curso, birthDate, classroom, specialties, hobbies) {
        var _this = _super.call(this, name, email, curso, birthDate, classroom, specialties, hobbies) || this;
        _this.name = name;
        _this.email = email;
        _this.curso = curso;
        _this.birthDate = birthDate;
        _this.classroom = classroom;
        _this.specialties = specialties;
        _this.hobbies = hobbies;
        return _this;
    }
    Student.prototype.execute = function () {
    };
    Student.prototype.getAllStudents = function () {
    };
    Student.prototype.getAllTeachers = function () {
    };
    Student.prototype.getAge = function () {
        return moment().diff(this.birthDate, "years");
    };
    return Student
}());
exports.Student = Student;
