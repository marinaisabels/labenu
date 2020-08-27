import { validateCharacter, Character} from "../src/validateCharacter";

export const performAttack = (attacker: Character, defender: Character) => {
    if(!validateCharacter(attacker) || !validateCharacter(defender)){
        throw new Error("Invalid Character")
    }
    if (attacker.force > defender.defense) {
        defender.life -= attacker.force - defender.defense;
      }
}

// export const performAttack = (
//     attacker: Character,
//     defender: Character,
//     validator: (input: Character) => boolean
//   ) => {
//     if (!validator(attacker) || !validator(defender)) {
//       throw new Error("Invalid character");
//     }
  
//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };