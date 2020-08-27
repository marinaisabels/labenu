import { performPurchase, User } from "../src/index"

describe("Testando performPurchase", () => {
    test("O saldo deverá ser maior do que o valor da compra", ()=> {
        const user: User = {
            nome: "Ana",
            saldo: 50
        }

        const result = performPurchase(user, 30)
        expect(result).toEqual({
            ...user, 
            saldo: 30
        })
    })

    test("O saldo deverá ser igual ao valor da compra", ()=> {
        const user: User = {
            nome: "Ana",
            saldo: 50
        }

        const result = performPurchase(user, 50)
        expect(result).toEqual({
            ...user, 
            saldo: 50
        })
    })

    test("O saldo deverá ser menor do que o valor da compra", ()=> {
        const user: User = {
            nome: "Ana",
            saldo: 50
        }

        const result = performPurchase(user, 50)
        expect(result).toEqual({
            ...user, 
            saldo: 80
        })
    })
})