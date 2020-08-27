

function strMaiorEMenor(){
    const str = "PaZ";
    let result = "";
    
    for(let i = 0; i < str.length; i++){
        console.log(result)
        const letraAtual = str[i];
        const letraAtualMaiuscula = letraAtual.toUpperCase() 
        const letraAtualMinuscula = letraAtual.toLowerCase()
        if(letraAtual === letraAtualMaiuscula){
            result =  result + letraAtualMinuscula 
        } else {
            result = result + letraAtualMaiuscula
        }
    }
    return result
}

console.log(strMaiorEMenor())

