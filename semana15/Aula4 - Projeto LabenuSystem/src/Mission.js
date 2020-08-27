"use strict";
exports.__esModule = true;
var Mission = /** @class */ (function () {
    function Mission(name, id, initialDate, finishDate, TeacherList, StudentsList) {
        this.name = name;
        this.id = id;
        this.initialDate = initialDate;
        this.finishDate = finishDate;
        this.TeacherList = TeacherList;
        this.StudentsList = StudentsList;
    }
    Mission.prototype.getId = function () {
        return this.id;
    };
    Mission.prototype.getName = function (name) {
        return this.name;
    };
    Mission.prototype.getInitialDate = function () {
        return this.initialDate;
    };
    Mission.prototype.getFinishDate = function () {
        return this.finishDate;
    };
    // public getCurrentModule(): number | undefined {
    //     return this.currentModule;
    //   }
    Mission.prototype.addTeacher = function (teacher) {

        // console.log(`O professor ${this.name} foi adicionado com sucesso!`)
        this.TeacherList.push(teacher);
    };
    Mission.prototype.addStudent = function (student) {
        this.TeacherList.push(teacher);
    };
    Mission.prototype.addStudent = function (student) {
        this.StudentsList.push(student);
    };
    Mission.prototype.setName = function (name) {
        this.name = name;
    };
    return Mission;
}());
exports.Mission = Mission;
