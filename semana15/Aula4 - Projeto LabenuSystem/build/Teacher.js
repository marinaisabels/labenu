"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Teacher {
    constructor(id, name, email, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialties = specialties;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map