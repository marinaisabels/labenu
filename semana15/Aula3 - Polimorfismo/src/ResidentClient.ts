import { Client } from './Client'
import { Residence } from './Residence';

export class ResidentClient extends Residence implements Client{
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    residentsQuantity:number;
    cep: string;
    private cpf: string;

    constructor(name: string, registartion: number, consumedEnergy: number, residentsQuantity:number, cep: string, cpf: string, ){
        super(residentsQuantity, cep)
    }
    
    getCpfResidents(): string {
        return this.cpf
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }


}