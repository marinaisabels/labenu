/*//Exercícios de interpretação de código
//1.

function conversorDeMoeda(valorEmDolar){
	//Função que permite fazer uma sintaxe sobre um determidado código.
	// Logo após a função, determinamos o nome desta função que é o "conversorDeMoeda".
	//As funções nomeadas podem receber parâmentros, que neste caso é o"valorEm Dolar".
	const cotacao = Number(prompt("Informe o valor da cotação do Dólar"))
    //Após declarar uma sintaxe, dar nome a função e receber o parametro, é importante determinar uma váriavel.
    // Variaveis também recebem um nome que aquiestá sndo representado por "cotacao"
    //Após definir uma variavel e o nome dela, este escopo está dizendo que o valor da cotação a ser informado é um numero, por isso é preciso colocar o "Number" antes do "prompt" que apresenta logo quando a pagina é carregada.

	return "R$" + (valorEmDolar * cotacao)
	//Na função, apresentamos a informação através da variável e ela precisa ser devolvida através de uma palavrada reservada (Keyword) que é o return.
	// Essa parte da sintaxe está explicando que o valor a ser devolvido deve ser o valor informado mais o parametro exigido da função vezes a contação do dia.
}

const meuDinheiro = conversorDeMoeda(100)
console.log(meuDinheiro)
// Aqui foi criada mais uma variavel e um nome para ela para determinar o valor total da função, por isso o nome da função éusada novamente.
// E a ultima parte, é imprimir o valor no console, que será  o valor do Meu dinheiro que é igual ao valor da função.

//2.

function investDinheiro(tipoDeInvestimento, valor){
	//Apresentação de um função de Investiento de Valores
	let valorAposInvestimento;
	//Começando com uma variável que pode ser alterada e o nome da váriavel.

	switch(tipoDeInvestimento){
		//Está função precisa de uma condicional para avaliar os valores de cada investimento apresentado. A condicional terá dentro do parenteses o nome de um parametro da função.
		case "Poupança";
		//Nesta condicional,é preciso utilizar uma clausula que executa o nome de uma ação.
		    valorAposInvestimento = valor * 1.03;
		    //Para a execução, o valor precisa ser mostrado e a variavel apresenta esse valor vezes a cotação.
		    break;
		    // Isso siginifica que está ação da condicional foi finalizada para este valor.
		case "Renda Fixa":
		 //Aqui é apresentado outra clausula para realizar  a execução do próximo valor.
		    valorAposInvestimento = valor * 1.05;
		    break;
		    // Isso significa que já foi executado o outro valor e ele pode ser finalizado.
        case "CDB":
            valorAposInvestimento = valor * 1.06;
            break; 
        case "Ações":
            valorAposInvestimento = valor * 1.1;
            break;
        default:
         //Se Nenhum caso for aceito, a clausula ocional será esta que é a ultima ação a ser executada.
            alert("TIPO DE INVESTIMENTO INFORMADO INCORRETO!")
            //Caso nenhuma das ações executadas não seja encontrada, e o default seja necessário, este alert na pagina será apresentado.
            break;
            // Finalizando esta ação.
           }
           return valorAposInvestimento
           //através do keyword, o valor da variável será apresentado.
           }

    const novoMontante = investeDinheiro("Ações", 150)
    // É preciso criar uma nova variavel para representar a função e o seu valor.
    const segundoMontante = investeDinheiro("Tesouro Direito", 200)
     // Segunda variavel para apresentar o valor da função.

    console.log(novoMontante)
    console.log(segundoMontante)
    // Imprime as duas informações no console.

	

//3.

const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283]
// Esta é uma váriavel para representar um array. Um Array permite guardar varias informações em uma mesma variável.
const array1 = []
const array2 = []
//Variaveis que representam os arrays.


for(let numero of numeros){
// O for é uma estrutura de laço que permite percorrer os valores que estão dentro de um Array.
//Neste Bloco, é apresentado a condição que para cada variavel 'numero'.
	if(numero % 2 === 0){
		array1.push(numero)
 //Aqui é apresentado a condição da variavel dividido por doi que seja igual a 0, se for igual a zero será 'true' e será acrescentado o valor. 
 // Para acrescentar um valor em um array, é necessário utilizar o 'push'
	}else{
// Este é ainda uma condição, mas o resultado é só quando o vakor é false.
		array2.push(numero)
// Acrescentando o valor do segundo array.		
	}
}


console.log("Quantidade total de números", numeros.length)
console.log(array1.length)
console.log(array2.length)

// Imprime os resultados dos arrays no console.


//4.

const numeros = [25,12,55,64,121,44,11,84,51,48,14,73,111,283,1,99,13,31,83,131,1,1.1,-10,25,1590]
//variavel para representar o array de numeros.

let numero1 = Infinity
let numero2 = 0
//Duas variaveis que são iguais o valor de Infinity e 0.

for(let numero of numeros){
	if(numero < numero1){
		numero1 = numero
	}
// Este Bloco apresenta a informação que, para percorrer todo o array numeros e estipular a condição.
// Se  numero for menor que o numero1, o numero1 será igual ao numero.

	if(numero > numero2){
		numero2 = numero
		// se o numero for maior que o numero2, ele será igual ao numero2.
	}
}

console.log(numero1)
console.log(numero2)
// Imprime as informações das duas variaveis.



//Exercícios de Lógica de Programação

//1.

/*const listaUm = [10, 18, 25, 40, 63, 71,86 ,99]

       for(let i = 0, i = listaUm.length; i < 1; i++){
       	console.log(listaUm[i])
       }


const listaUm = [10, 18, 25, 40, 63, 71,86 ,99]
     
     let par = 0
     for(let numero of listaUm){
     	if(numero === par){
     		par = numero
     	}
     }

  let listaUm = 0

  while (listaUm < 100){
  	console.log(listaUm)

  	i++
  }   
  */

//2.

/*
a. booleano1 && booleano2 && !booleano4
//false

b.(booleano1 && booleano2) || !booleano3
//false
c.  (booleano2 || booleano3) && (booleano4 || booleano1)
//true
d. !(booleano2 && booleano3) || !(booleano1 && booleano3)
//true
e.!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
//false
*/

//3.

//O codigo não funciona pois o while não pode ser usado para selecionar somente alguns numeros, e sim para chegar até um obejtivo determinado por uma variavel.
// Utilizei outro laço, o "for"  que consegue percorrer todos os numeros do array e selecionar determinados números, atraves de uma variavel que apresenta um  parametro.

/*const paresSelecionados = (quantidadeDeNumerosPares) => {
let i = 0
for(let i = 0; i < quantidadeDeNumerosPares; i++ ){

  console.log(i*2)
}

}

paresSelecionados(8)
*/
// Imprime numeros pares  até o 14!

//4.

/*function ladoDosTriangulos (a, b, c){
	if(a === b && a === c){
		return "O triângulo é Equilátero"
	} else if((a === b && a !==c) || (b === c && a !==b) || (a === c && c !==b)){
		return "O triângulo é Isósceles"
	}else {
		return "O triangulo é Escaleno"
	}
}

console.log(ladoDosTriangulos)*/

//5.

/*const numero1 = 15
const numero2 = 30
  if (numero1 < numero2){
	  console.log("O numero", numero2, "é maior")
  }
  if (numero2 % 2 === 0){
	  console.log("o", numero2, "é divido pelo", numero1)
  }*/
  
  // não consegui fazer a diferença entre eles.

  //Exercícios de Funções
1. 

  function arrayDeNumeros(){
	  const array = [12, 24, 30, 40, 55]
	  let segundoMaior = array [0]
	  let segundoMenor =  array [0]

	  
  }

  2.

  function oiParaAFuture(){
	  alert("Hello Future4")
  }

  oiParaAFuture()

  //Exercicio de Objetos 

  1. 
  Array é uma estrutura que representa dados que são armazenados e e ou não relação entre si.
  Objetos são estruturas mais complexas que permitem que que cada conteudo seja representado por um valor definido.Array

  2.
  function criaRetangulo(lado1, lado2) {
	  let largura = lado1
	  let altura = lado2
	  let perimetro = 2 * (lado1 + lado2)
	  let area = (lado1 * lado2)
  }
  return criaRetangulo

  // não deu certo e eu não consigo resolver essa questão.

  //3.

function filmeFavorito(){
	const meufilme = {
		titulo: "Step Up"
		Ano: 2006
		Diretora: "Anne Fletcher"
		Ator: "Channing Tatum"
		Atriz: "Jenna Dewan" 
	}
	console.log("Venha assistir o filme", titulo, "de", ano, "dirigido por", diretora, "estrelado por", atriz, "e por", ator)
}

//4.
function anonimizaPessoa(){
	const anonimo = {
		nome: "Miguel"
		idade: 3
		email:"luizmiguel@gmail.com"
		endereço:"Rua Maria Francisca da Silva"
	}

	return anonimo
}

//Não consegui consertar o erro dos numeros na função


// Exercicios de Funções de Array

1.
const array = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 }
]

function arrayAdultos (array){
	const soAdultos = array.filter(adulto)=>{
		return adulto.idade > 18
	}
}

function arrayCriancas(array){
	const soCriancas = array.filter(crianca) =>{
		return crianca.idade < 18
	}
}



2. 
