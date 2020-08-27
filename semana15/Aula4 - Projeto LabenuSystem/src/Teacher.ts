import { User } from "./User";


enum TEACHER_SPECIALTY {
import { MainTaskManager } from "./MainTaskManager";

export enum TEACHER_SPECIALTY {

  REACT = "REACT",
  REDUX = "REDUX",
  CSS = "CSS",
  TESTES = "TESTES",
  TYPESCRIPT = "TYPESCRIPT",
  OOP = "OOP",
  BACKEND = "BACKEND",
}

export class Teacher implements User {
  id: string;
  name: string;
  email: string;
  specialties: TEACHER_SPECIALTY[]

  constructor(id: string, name: string, email: string, specialties:[]) {

    this.id = id
    this.name = name
    this.email = email
    this.specialties = []
export class Teacher extends MainTaskManager implements User {
  constructor(
    public name: string,
    public email: string,
    public curso:string,
    public birthDate: moment.Moment,
    public classroom: string,
    public specialties: TEACHER_SPECIALTY[], 
    public hobbies: string[]
    ) {

    super(name, email, curso, birthDate, classroom, specialties, hobbies);

  }

}