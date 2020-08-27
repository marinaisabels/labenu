import { User } from './UserAccount'
import { JSONFileManager } from './JSONFileManager'

export class Bank {
    private accounts: User[]
    private filemanager: JSONFileManager


    constructor(accounts: User[], filemanager: JSONFileManager) {
        this.accounts = accounts;
        this.filemanager = filemanager;
    }

    createAccount():void {
        console.log("Sua conta foi criada com sucesso!")
        this.accounts
    }

    getAllAccounts(): User[]{
        return this.accounts
    }

    getAccountByCpf(): User[]{
        return this.accounts
    }

    saveAccounts(): void {
        console.log("A conta foi salva com sucesso!")
    }

}