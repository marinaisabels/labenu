"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const __1 = require("..");
const __2 = require("..");
const __3 = require("..");
class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    setFilePath(path) {
        this.filePath = path;
    }
    writeFile(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}
exports.FileManager = FileManager;
const missions = new FileManager("missions.json");
const students = new FileManager("students.json");
const teachers = new FileManager("teachers.json");
console.log(missions.readFile());
console.log(students.readFile());
console.log(teachers.readFile());
missions.writeFile([__1.class1, __1.class2]);
students.writeFile([__2.newStudent, __2.newStudent2]);
teachers.writeFile([__3.teacher1, __3.teacher2, __3.teacher3, __3.teacher4]);
//# sourceMappingURL=JSONFileManager.js.map