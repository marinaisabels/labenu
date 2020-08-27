"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mission {
    constructor(name, id, initialDate, finishDate, TeacherList, StudentsList) {
        this.name = name;
        this.id = id;
        this.initialDate = initialDate;
        this.finishDate = finishDate;
        this.TeacherList = TeacherList;
        this.StudentsList = StudentsList;
    }
    getId() {
        return this.id;
    }
    getName(name) {
        return this.name;
    }
    getInitialDate() {
        return this.initialDate;
    }
    getFinishDate() {
        return this.finishDate;
    }
    addTeacher(teacher) {
        this.TeacherList.push(teacher);
    }
    addStudent(student) {
        this.StudentsList.push(student);
    }
    setName(name) {
        this.name = name;
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map