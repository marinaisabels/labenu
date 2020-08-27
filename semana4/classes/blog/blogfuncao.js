class Post {
    constructor(titulo, autor, conteudo){
        this.titulo = titulo
        this.autor = autor
        this.conteudo = conteudo
        
       
    }
}

function criar(){
	const titulo = document.getElementById("titulo").value
	const autor = document.getElementById("autor").value
	const conteudo = document.getElementById("conteudo").value
	
	const criaPost = new Post(titulo, autor, conteudo)
	
	const blogPost = []
	blogPost.push(criaPost)


}

function novoPost(criaPost){
	const sectionNovo = document.querySelector("postsdofeed")
    sectionNovo.innerHTML += "<p>" +criaPost+ "</p>"
}
