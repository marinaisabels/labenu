import { Commerce } from "./Commerce";
import { Client } from "./Client";

export class CommercialClient extends Commerce implements Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    private cnpj: string;
    floorsQuantity: number;
    cep: string;

    constructor(name: string, registrationNumber: number, consumedEnergy: number, cnpj: string, floorsQuantity: number, cep: string){
        super(floorsQuantity, cep)
        this.name = name 
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        this.cnpj = cnpj 
        this.floorsQuantity = floorsQuantity
    }

    getCnpjClient(): string {
        return this.cnpj
    }
    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
   
}