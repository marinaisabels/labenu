import { validateCharacter } from "../src/validateCharacter";

describe("Testing validateCharacter", () => {
    test("Should return for empty character name", () => {
        const result = validateCharacter({
            name: "",
            life: 100, 
            defense:50, 
            force: 150
        })
        expect(result).toBe(false)
    })
    test("Should return for empty character life", () => {
        const result = validateCharacter({
            name: "José",
            life: 0, 
            defense:50, 
            force: 150
        })
        expect(result).toBe(false)
    })
    test("Should return for empty character force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 200, 
            defense:50, 
            force: 0
        })
        expect(result).toBe(false)
    })
    test("Should return for empty character defense", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 200, 
            defense:0, 
            force: 180
        })
        expect(result).toBe(false)
    })
    test("Should return to value negative for character defense, life or force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: -200, 
            defense:-10, 
            force: -180
        })
        expect(result).toBe(false)
    })
    test("Should return 0 for character defense, life or force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 0, 
            defense:0, 
            force: 0
        })
        expect(result).toBe(false)
    })
    test("Should return true for value from character", () => {
        const result = validateCharacter({
            name: "Ana",
            life: 70, 
            defense:90, 
            force: 220
        })
        expect(result).toBe(true)
    })
});
