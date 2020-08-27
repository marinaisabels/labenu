
	construtor(valor, tipo, descricao){
		this.valor = valor 
		this.tipo = tipo
		this.descricao = descricao
	}
}

function Cadastrar(){
	const valor = document.getElementByClass("valor").value
	const tipo = document.getElementByClass("tipo").value
	const descricao = document.getElementByClass("descricao").value
    
    if(valor === "" || tipo === "" || descrição === ""){
    	alert("Preencha o campo corretamente!")
  
}

