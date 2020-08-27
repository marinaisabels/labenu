"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank(accounts, filemanager) {
        this.accounts = accounts;
        this.filemanager = filemanager;
    }
    Bank.prototype.createAccount = function (age) {
        if (age < 18) {
            console.log("O usuário precisa ter mais de 18 anos");
        }
        else {
            console.log("Sua conta foi criada com sucesso!");
        }
    };
    Bank.prototype.getAllAccounts = function () {
        return this.accounts;
    };
    Bank.prototype.getAccountByCpf = function () {
        return this.accounts;
    };
    Bank.prototype.saveAccounts = function () {
        console.log("A conta foi salva com sucesso!");
    };
    return Bank;
}());
exports.Bank = Bank;
