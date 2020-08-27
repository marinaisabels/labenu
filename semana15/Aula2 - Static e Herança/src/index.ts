import { User } from './User'
import { Customer } from './Customer'
import { Employee } from './Employee'
import { Seller } from './Seller'

// Exercício 1 - a 
// Sim, é possível imprimir o password.
// b - A mensagem só apareceu uma vez.

const userData: User = new User ("valorId", "jose@labenu.com", "Jose", "bananinha",)
console.log(userData)

// Exercício 2
// a - Apenas uma vez a mensagem aparece.
// b- A mensagem aparece uma vez porque o customer é herda a mensagem do pai dele que é a classe User.
const customerData: Customer = new Customer("valorId", "maria@labenu.com", "Maria", "bananinhas2", "12345678x")
console.log(customerData)


// Exercício 3
// É possivel imprimir o password pois ela tem o  keyword this que só pode ser acessado dentro da propria classe. 


// Exercício 4 
customerData.introduceYourself()

// Exercício 5
console.log("Olá, sou "+customerData.introduceYourself(), "Bom dia!")

// Exercicio 6
// a - A mensagem só apareceu uma vez.
// b- id, email, name, password,  e baseSalary (Nao consegui fazer com que a Data aparecesse no console com o Date, não sei qual é o formato de data que ele recebe. Ele só aparece se for String.)
// const employeeData: Employee = new Employee("valorId", "joaquim@labenu.com", "Joaquim", "bananinha123","02/04/2020", 1000 )
// console.log(employeeData)

// Exercício 7
// public calculateTotalSalary(): number {
//     return this.baseSalary + 400
// }

// Exercício 8 
// Precisei passar todos os parâmetros do pai da seller.
// Consegui imprimir todos os parametros pois acho que a seller como filha, herdou os valores do pai Employee.
const sellerData: Seller = new Seller("valorId", "ValorEmail", "ValorNome", "ValorSenha", "ValorData", 3000)
console.log(sellerData)

// Exercício 9 
// Ele imprime o valor 0 junto com os outros valores do pai.

// Exercício 10
// a- Foi impresso o valor de 3400.

const sellerData: Seller = new Seller("valorId", "ValorEmail", "ValorNome", "ValorSenha", "ValorData", 3000)
console.log(sellerData)
const sellerTotal: number = sellerData.calculateTotalSalary()
console.log(sellerTotal)

// Exercício 11
// No exemplo do slide o static está = 0  por exemplo, e no exemplo do notion, ele tem que colocar number = 0. Não entendi isso '-'