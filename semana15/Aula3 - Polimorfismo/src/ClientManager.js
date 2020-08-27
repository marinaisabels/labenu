"use strict";
exports.__esModule = true;
// export class ClientManager {
//     private allClients: Client[]
//     getClientsQuantity(): Client [] {
//         return this.allClients
//     }
// }
// Não entendi como foi feito este exercício.
var ClientManager = /** @class */ (function () {
    function ClientManager() {
        this.clients = [];
        //  public calculateTotalIncome(): number {
        //     let total: number = 0;
        //     this.clients.forEach((client) => {
        //       total += client.calculateBill();
        //     });
        //     return total;
        //   }
        // 	public deleteUser(registrationNumber: number): void {
        //     let registrationIndex = undefined;
        //     for (let i = 0; i < this.clients.length; i++) {
        //       if (this.clients[i].registrationNumber === registrationNumber) {
        //         registrationIndex = i;
        //       }
        //     }
        //     if (registrationIndex !== undefined) {
        //       this.clients.splice(registrationIndex, 1);
        //     }
        //   }
    }
    ClientManager.prototype.calculateBillOfClient = function (registrationNumber) {
        var foundClient = this.clients.find(function (client) {
            return client.registrationNumber === registrationNumber;
        });
        if (foundClient) {
            return foundClient.calculateBill();
        }
        return 0;
    };
    ClientManager.prototype.calculateTotalIncome = function () {
    };
    ClientManager.prototype.deleUser = function () {
    };
    return ClientManager;
}());
