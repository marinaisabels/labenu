
import { Student } from "./Student";
import * as moment from 'moment'
import { Teacher } from "./Teacher";
import { Mission } from "./Mission";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
moment.locale("pt-br")

const newStudent: Student = new Student("ValorId", "Manoel", "manoel@live.com", moment("25/05/1994", "DD/MM/YYYY"), ["Jogar Bola"])
// console.log(newStudent)

const newStudent2: Student = new Student("ValorId", "Beatriz", "beatriz@live.com", moment("25/05/1994", "DD/MM/YYYY"), ["Dançar Tango"])
// console.log(newStudent2)

const teacher1: Teacher = new Teacher("ValorId", "Paulinha", "paulinha@labenu.com", [])

const teacher2: Teacher = new Teacher("ValorId", "Soter", "soter_bananinha@labenu.com", [])

const teacher3: Teacher = new Teacher("ValorId", "Goli", "goli_hp@labenu.com", [])

const teacher4: Teacher = new Teacher("ValorId", "João", "joao@labenu.com", [])

const class1: FullTimeMission = new FullTimeMission("Nome", "ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [], [])
class1.addStudent(newStudent)
class1.addTeacher(teacher1)
class1.addTeacher(teacher3)
console.log(class1)
const class2: NightMission = new NightMission("Nome","ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [], [])
class2.addStudent(newStudent2)
class2.addTeacher(teacher2)
class2.addTeacher(teacher4)
console.log(class2)

import * as moment from 'moment'
moment.locale("pt-br")
import { Student } from "./Student";
import { Teacher, TEACHER_SPECIALTY } from "./Teacher";
import { FullTimeMission } from "./FullTimeMission";
import { NightMission } from "./NightMission";
import { MainTaskManager } from './MainTaskManager';


export const newStudent: Student = new Student("ValorId", "Manoel", "manoel@live.com", moment("25/05/1994", "DD/MM/YYYY"), "class1", [TEACHER_SPECIALTY.BACKEND], ["Jogar Bola"]  )
// console.log(newStudent)
newStudent.getAllStudents()
export const newStudent2: Student = new Student("ValorId", "Beatriz", "beatriz@live.com", moment("25/05/1994", "DD/MM/YYYY"), "class1",[TEACHER_SPECIALTY.BACKEND], ["Dançar Tango"])
// console.log(newStudent2)
newStudent2.getAllStudents()

console.log([newStudent, newStudent2])

export const teacher1: Teacher = new Teacher("ValorId", "Paulinha", "paulinha@labenu.com", [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT] )

export const teacher2: Teacher = new Teacher("ValorId", "Soter", "soter_bananinha@labenu.com", [TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX, TEACHER_SPECIALTY.TESTES])

export const teacher3: Teacher = new Teacher("ValorId", "Goli", "goli_hp@labenu.com", [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT])

export const teacher4: Teacher = new Teacher("ValorId", "João", "joao@labenu.com", [TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.BACKEND])
// console.log([teacher1, teacher2, teacher3, teacher4])

export const class1: FullTimeMission = new FullTimeMission("class-1", "ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [teacher1, teacher3], [newStudent])
class1.addStudent(newStudent)
class1.addTeacher(teacher1)
class1.addTeacher(teacher3)
// console.log(class1)

export const class2: NightMission = new NightMission("class2-na-night","ValorId", moment("22/07/2020", "DD/MM/YYYY"), moment("22/10/2020", "DD/MM/YYYY"), [teacher2, teacher4], [newStudent2])
class2.addStudent(newStudent2)
class2.addTeacher(teacher2)
class2.addTeacher(teacher4)
// console.log(class2)


