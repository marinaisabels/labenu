// Exercício 1 

interface HashTableForStr {
    [index: string]: number;
}

const str = (addString: string, removeString: string, subString: string): boolean => {
    const addStringHash: HashTableForStr = {}

    for (let char of addString) {
        if (addStringHash[char]) {
            addStringHash[char]++;
        } else {
            addStringHash[char] = 1;
        }
     
    }

    return true
}

console.log("str")