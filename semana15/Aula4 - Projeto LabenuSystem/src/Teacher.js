"use strict";
exports.__esModule = true;
var TEACHER_SPECIALTY;
(function (TEACHER_SPECIALTY) {
    TEACHER_SPECIALTY["REACT"] = "REACT";
    TEACHER_SPECIALTY["REDUX"] = "REDUX";
    TEACHER_SPECIALTY["CSS"] = "CSS";
    TEACHER_SPECIALTY["TESTES"] = "TESTES";
    TEACHER_SPECIALTY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALTY["OOP"] = "OOP";
    TEACHER_SPECIALTY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALTY || (TEACHER_SPECIALTY = {}));
})(TEACHER_SPECIALTY = exports.TEACHER_SPECIALTY || (exports.TEACHER_SPECIALTY = {}));

var Teacher = /** @class */ (function () {
    function Teacher(id, name, email, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialties = [];
        this.specialties = specialties;

    }
    return Teacher;
}());
exports.Teacher = Teacher;
