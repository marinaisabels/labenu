function criaTarefa(){
	const input = document.querySelector("input")
	const novaTarefa = input.value 
	const select = document.querySelector("select").value

	if (select === "segunda"){
		const listaSegunda = document.getElementById("diasegunda")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"

	}else if (select === "terca"){
		const listaSegunda = document.getElementById("diaterca")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"

	}else if (select === "quarta"){
		const listaSegunda = document.getElementById("diaquarta")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"
	
	}else if (select === "quinta"){
		const listaSegunda = document.getElementById("diaquinta")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"
	
	}else if (select === "sexta"){
		const listaSegunda = document.getElementById("diasexta")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"
	
	}else if (select === "sabado"){
		const listaSegunda = document.getElementById("diasabado")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"
	
	}else if (select === "domingo"){
		const listaSegunda = document.getElementById("diadomingo")
		listaSegunda.innerHTML  += "<p>" +novaTarefa+ "</p>"
	
	}
}
