import { verifyAge, User, NACIONALITY, Casino, LOCATION } from "../src/casino"


describe("Testing verifyAge", () => {
    test("brazilian allowed", ()=> {
        const user: User = {
            name: "Ana",
            age: 20, 
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name:"Casino", 
            location: LOCATION.BRAZIL,
        }

        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual(["Ana"])
    })
    test("brazilian allowed", ()=> {
        const user: User = {
            name: "Jose",
            age: 20, 
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name:"Casino", 
            location: LOCATION.BRAZIL,
        }

        const result = verifyAge(casino, [user])
        expect(result.brazilians.allowed).toEqual(["Jose"])
    })
    test("brazilian and americans unallowed", ()=> {
        const american: User = {
            name: "Juan",
            age: 19, 
            nacionality: NACIONALITY.AMERICAN
        }
        const brazilian: User = {
            name: "Maria",
            age: 19, 
            nacionality: NACIONALITY.BRAZILIAN
        }
        const casino: Casino = {
            name:"Casino", 
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [american, brazilian])
        expect(result.brazilians.unallowed).toEqual(["Juan", "Maria"])
        expect(result.americans.unallowed).toEqual(["Juan", "Maria"])
    })
    test("brazilian and americans unallowed", ()=> {
        const american: User = {
            name: "Juan",
            age: 21, 
            nacionality: NACIONALITY.AMERICAN
        }
        const american2: User = {
            name: "Juan2",
            age: 21, 
            nacionality: NACIONALITY.AMERICAN
        }
        const brazilian: User = {
            name: "Maria",
            age: 19, 
            nacionality: NACIONALITY.BRAZILIAN
        }
        const brazilian2: User = {
            name: "Maria2",
            age: 19, 
            nacionality: NACIONALITY.BRAZILIAN
        }
        const casino: Casino = {
            name:"Casino", 
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [american, brazilian, american2, brazilian2])
        expect(result.brazilians.unallowed).toEqual(["Maria2", "Maria"])
        expect(result.americans.allowed).toEqual(["Juan", "Juan2"])
    })
})