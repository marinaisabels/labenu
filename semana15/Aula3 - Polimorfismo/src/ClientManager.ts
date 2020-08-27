import { Client } from "./Client";

// export class ClientManager {
//     private allClients: Client[]


//     getClientsQuantity(): Client [] {
//         return this.allClients
//     }
// }

// Não entendi como foi feito este exercício.

class ClientManager {
    private clients: Client[] = []



    public calculateBillOfClient(registrationNumber: number): number {

        const foundClient = this.clients.find((client) => {
            return client.registrationNumber === registrationNumber
        })

        if (foundClient) {

            return foundClient.calculateBill()
        }

        return 0;

    }
    public calculateTotalIncome(): void {

    }

    public deleUser(): void {

    }

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