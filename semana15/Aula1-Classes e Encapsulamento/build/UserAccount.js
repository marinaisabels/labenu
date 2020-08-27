"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, cpf, age, balance, transactions) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
        this.balance = balance;
        this.transactions = transactions;
    }
    addBalance(sum = 10) {
        console.log(`Saldo de ${sum}adicionado com sucesso!`);
        return this.balance + sum;
    }
    getBalance() {
        return this.balance;
    }
}
exports.User = User;
//# sourceMappingURL=UserAccount.js.map