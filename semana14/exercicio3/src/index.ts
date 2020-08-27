//Crie uma função que receba dois parâmetros: um array de posts e um autor. Ela deve devolver todos os posts deste autor

export type redesocial ={
    autor: string,
    posts:string
}

const primeiroPost: redesocial = {
    autor:"Maria",
    posts:"Olá"   
}

const segundoPost: redesocial = {
    autor:"Andre",
    posts:"Oi"
}

const terceiroPost: redesocial = {
    autor:"João",
    posts:"Hey"
}

const quartoPost: redesocial = {
    autor:"Helena",
    posts:"E ai?"
}

// Crie um array com 5 objetos deste tipo de posts
const postsNasRedesSociais: redesocial[] = [primeiroPost,segundoPost, terceiroPost,quartoPost]

function post(array: redesocial[], posts:string): redesocial[] {
    const postDoUsuario = postsNasRedesSociais.filter(redesocial => redesocial.posts === posts)
    return postDoUsuario
}
const resultado = post(postsNasRedesSociais, "")
console.log(resultado)