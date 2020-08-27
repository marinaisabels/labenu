import * as fs from "fs";
import { class1, class2 } from "..";
import { newStudent, newStudent2 } from '..'
import { teacher1, teacher2, teacher3, teacher4 } from '..'


export class FileManager {
    
  constructor(private filePath: string) {}

  public setFilePath(path: string): void {
    this.filePath = path;
  }

  public writeFile(data: any): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
  }

  public readFile(): any {
    const data = fs.readFileSync(this.filePath);
    return JSON.parse(data.toString());
  }
}

const missions = new FileManager("missions.json");
const students = new FileManager("students.json");
const teachers = new FileManager("teachers.json");
// imprime as infos do arquivo
// console.log(missions.readFile());
// console.log(students.readFile());
// console.log(teachers.readFile());

// fm.setFilePath("outro-arquivo");

// escreve no arquivo
// NÃO SEI SE ISSO TA CERTO :(

missions.writeFile([class1, class2]);
students.writeFile([newStudent, newStudent2])
teachers.writeFile([teacher1, teacher2, teacher3, teacher4])
console.log(missions, students, teachers)