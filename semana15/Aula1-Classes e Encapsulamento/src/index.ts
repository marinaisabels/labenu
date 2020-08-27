import { User } from './UserAccount'
import { Transaction } from './Transaction'
import { Bank } from './Bank'
import {JSONFileManager} from "./JSONFileManager";

const newUser: User = new User("Maria",  "01230392829", 18, 0, [] );
console.log(newUser)
// const createAccountBank: Bank = new Bank("New Account")
// createAccountBank.createAccount(newUser)

// const fileManager: JSONFileManager = new JSONFileManager('createAccountBank.json');
// fileManager.writeInJSON(createAccountBank);




// const fileManager: JSONFileManager = new JSONFileManager('createAccountBank.json');
// // fileManager.writeObjectToFile()
