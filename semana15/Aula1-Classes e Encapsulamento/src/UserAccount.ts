import { Transaction } from './Transaction'

export class User {
    private name: string;
    private cpf: string;
    private age: number;
    private balance: number;
    private transactions: Transaction[];


    constructor(name: string, cpf:string, age:number, balance:number, transactions: Transaction[] ) {
        this.name = name;
        this.cpf = cpf;
        this.age = age; 
        this.balance = balance;
        this.transactions = transactions;
    }

    addBalance(sum: number = 10): number{
        console.log(`Saldo de ${sum}adicionado com sucesso!`)  
        return this.balance + sum   
    }

    getBalance(): number{
     return this.balance
    }
}


