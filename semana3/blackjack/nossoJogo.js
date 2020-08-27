import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

alert("Bem Vindo ao Jogo Black Jack!");
console.log("Bem Vindo ao Jogo Black Jack!");

const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const naipes = ["♦️", "♥️", "♣️", "♠️"]

function confirmar(){ 
    if (confirm("Quer iniciar uma nova rodada?")){
    let cartas = confirmar();
      while (cartas.length < 13){
         let sorteio = Math.floor(Math.random() * 13);
           if (cartas.indexOf(sorteio) == +1)
                cartas.push(sorteio);

    console.log("Comprar Cartas")
      }
    }
}
    
