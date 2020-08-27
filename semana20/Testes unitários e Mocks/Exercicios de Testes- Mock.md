
### Exercício 1
a) 
export interface validateCharacter{ // nome somente character 
    name: string, 
    life: string,
    defense: string, // está errado é um number
    force: string // está errado é um number
}

b) 

export const validateCharacter = (input: Character): boolean => {
 if(!input.name || input.life === undefined
    || input.force === undefined || input.defense === undefined) {
        return false;
    }
    if (input.life < 0 || input.force < 0 || input.defense < 0) {
        return false
    }
    return true
}
Aqui eu tive que mudar a interface do input.life para number.

## Exercício 2

a) 
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
});

b)
 test("Should return for empty character life", () => {
        const result = validateCharacter({
            name: "José",
            life: 0, 
            defense:50, 
            force: 150
        })
        expect(result).toBe(false)
    })
   
c)
test("Should return for empty character force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 200, 
            defense:50, 
            force: 0
        })
        expect(result).toBe(false)
    })
});

d)
 test("Should return for empty character defense", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 200, 
            defense:0, 
            force: 180
        })
        expect(result).toBe(false)
    })
e)
 test("Should return to value negative for character defense, life or force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: -200, 
            defense:-10, 
            force: -180
        })
        expect(result).toBe(false)
    })
    
f)
 test("Should return 0 for character defense, life or force", () => {
        const result = validateCharacter({
            name: "Juan",
            life: 0, 
            defense:0, 
            force: 0
        })
        expect(result).toBe(false)
    })
    
g)
test("Should return true for value from character", () => {
        const result = validateCharacter({
            name: "Ana",
            life: 70, 
            defense:90, 
            force: 220
        })
        expect(result).toBe(true)
    })
    
## Exercício 3    

a) 
import { validateCharacter, Character} from "../src/validateCharacter";

export const performAttack = (attacker: Character, defender: Character) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }
    if (attacker.force > defender.defense) {
        defender.life -= attacker.force - defender.defense;
      } // Não entendi o porque desta condição.
}

b)
Não consegui fazer este exercício: 
export const performAttack = (
  attacker: Character,
  defender: Character,
  validator: (input: Character) => boolean
) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
};

c) 
Não entendi a diferença de fazer afunção com arrow function e boolean ou sem. 

## Exercício 4

a) Eu faria do validateCharacter pois ele tem todas as informações do personagem.

b) test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
c)
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});

## Exercício 5
## Exercício 6




