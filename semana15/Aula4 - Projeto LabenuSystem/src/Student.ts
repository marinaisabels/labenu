import { User } from "./User";
import * as moment from 'moment'


export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
      ) {}

import { MainTaskManager } from "./MainTaskManager";
import { TEACHER_SPECIALTY } from "./Teacher";

export class Student extends MainTaskManager implements User {
    constructor(
      public name: string,
      public email: string,
      public curso:string,
      public birthDate: moment.Moment,
      public classroom: string,
      public specialties: TEACHER_SPECIALTY[], 
      public hobbies: string[]
      ) {
        super(name, email, curso, birthDate, classroom, specialties, hobbies)
      }

  public execute(): void {
    
  }
  public getAllStudents(): void {
    
  }
  public getAllTeachers(): void {
    
  }
      public getAge(): number {
        return moment().diff(this.birthDate, "years");
      }
}