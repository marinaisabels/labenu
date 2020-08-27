//Exercício 1 

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
// false
resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
// false
resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true
resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//false
console.log("e. ", typeof resultado)
//boolean

//Exercício 2

let array
console.log('I. ', array)

array = null
console.log('II. ', array)


array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)


a. O que é `array` e como se declara em `JS`?
Arrays são maneiras de se guardar e acessar mais de uma informação ao mesmo tempo.

b. Qual o index inicial de um `array`?
array[0]

c. Como se determinar o tamanho do `array`?
array.length

d. Indique todas as mensagens impressas no console.
I. undefined
II. null
III. 11
IV.3 e 4
V. 19 e 9
VI. 3
VII. 1

//Exercício 1 - Escrita de Código

let grausFahrenheit
let grausKelvin
let grausCelcius

const fahrenheit = (grausCelcius)*9/5+32

const kelvin = (grausFahrenheit - 32)*5/9 + 273.15

grausfahrenheit = 77

const Kelvin = (grausfahrenheit-32)*5/9 + 273.75
console.log('a.' +Kelvin+"K")

grausCelcius = 80

const fahrenheit = (80)*9/5+32
console.log('b' +fahrenheit+ "F")


grausCelcius = 30

const Kelvin = (30-32)*5/9 + 273.75
console.log ('c' +Kelvin + "k")

const fahrenheit = (30)*9/5+32
console.log ('c' +fahrenheit + "F")


//d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

// Exercício 2 - Perguntas 

const pergunta1 = prompt ("Qual é a sua musica favorita?")
console.log (pergunta1)

const pergunta2 = prompt ("Quantos livros você já leu na sua vida?")
console.log (pergunta2)

const pergunta3 = prompt ("Qual foi a melhor lugar que você já visitou?")
console.log (pergunta3)

const pergunta4 = prompt ("Qual é  a sua cor favorita?")
console.log (pergunta4)

const pergunta5 = prompt ("Qual é o seu maior sonho?")
console.log (pergunta5)


// Exercício 3 

const quilowatthora = 280*0.05
console.log (quilowatthora)


const desconto = 14 - 15%
console.log (desconto)

