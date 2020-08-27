import { Commerce } from "./Commerce";
import { Residence } from "./Residence";
import { Industry } from "./Industry";


// 2. A - O erro foi "Não podemos criar uma instância para uma classe abstrata"
// B - As filhas da classe Place podem implementar métodos dela mas não fazer uma instância por ela.

// 3. 1 - Acho que se as filhas da classe Place implementar os métodos dela, elas podem fazer uma instância delas considerando estes métodos.
// 2- Por que a interface não pode definir métodos ou comportametos, por isso a Place precisa ser uma classe para ter essas possibilidade.
// 3- Ela é uma classe abstrata porque defini métodos que podem ser utilizados em outras subclasses.
const getCepCommerce: Commerce = new Commerce(10, "06753340")
console.log(getCepCommerce.getCep())

const getCepResidence: Residence = new Residence(20, "06872356")
console.log(getCepResidence.getCep())

const getCepIndustry: Industry = new Industry(15, "04687123")
console.log(getCepIndustry.getCep())


// 4. Os métodos dessa classe são  getCpfResidents e calculateBills, pertecem ela pois são informações importantes das residências que devem ser consideradas.

// 5. As semelhanças entre as duas classes são que elas recebem as interfaces e tbm são filhas de outra classe. E os métodos são iguais tbm.
// B - A diferença é que um recebe a quantidade de andares e o outra a quantidade de residencias. 

// 6. A - Ela deve ser filha da Industry porque ela pode herdar informações necessárias de lá.
// B - Ela pode ter a implementação da Client.
// C - Os getters seria pra pegar informações.

// 7. 