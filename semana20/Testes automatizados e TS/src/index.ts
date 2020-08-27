export function performPurchase(user: User, value: number): User | undefined {
	if(user.saldo >= value) {
		return {
			...user,
			saldo: user.saldo - value //não entendi porque -value		
		}
	}
	return undefined
}


export interface User {
    nome: string, 
    saldo: number 
}