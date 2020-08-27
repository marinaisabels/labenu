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

export interface Character{
    name: string, 
    life: number,
    defense: number,
    force: number
}