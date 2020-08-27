"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(accounts, filemanager) {
        this.accounts = accounts;
        this.filemanager = filemanager;
    }
    createAccount(age) {
        if (age < 18) {
            console.log("O usuário precisa ter mais de 18 anos");
        }
        else {
            console.log("Sua conta foi criada com sucesso!");
        }
    }
    getAllAccounts() {
        return this.accounts;
    }
    getAccountByCpf() {
        return this.accounts;
    }
    saveAccounts() {
        console.log("A conta foi salva com sucesso!");
    }
}
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map