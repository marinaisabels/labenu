import { User } from "./User";
import { TEACHER_SPECIALTY, Teacher } from "./Teacher";
import { Student } from "./Student";
import moment = require("moment");

export class MainTaskManager {
    constructor(
    public name: string,
    public email: string,
    public curso:string,
    public birthDate: moment.Moment,
    public classroom: string,
    public specialties: TEACHER_SPECIALTY[], 
    public hobbies: string[]
    ) {}


    public getAge(): number {
        return moment().diff(this.birthDate, "years");
      }
    id: string;

    public execute(): void {

    }

    public getAllStudents(): void{
        console.log(`<${this.name}>`)
        console.log(`<${this.email}>`)
        console.log(`<${this.curso}>`)
        console.log(`<${this.classroom}>`)
        console.log(`<${this.birthDate}>`)
    }

    public getAllTeachers(): void {
        console.log(`<${this.name}>`)
        console.log(`<${this.email}>`)
        console.log(`<${this.birthDate}>`)
        console.log(`<${this.specialties}>`)
    }
}