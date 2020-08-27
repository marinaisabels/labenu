import React from 'react'
import TelaCadastro from './TelaCadastro'
import App from '../App';
import axios from 'axios'
import ItemDeListaUsuario from './ItemDeListaUsuario';


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

// Mock de usuário para pegar no postman
const listaDeUsuarios = [
    {
        id: '1',
        name: "Marina",
    },
    {
        id:'2',
        name: "Maria"
    }
]


class TelaLista extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            listaDeUsuarios: [],
        };
    }
  
    buscarListaDeUsuarios = () => {
        const listaDeUsuariosPromessa = axios.get(`${baseUrl}/users/getAllUsers`,{
            headers: {
                'api-token': "Marina Isabel",
            }
        })
    
        //Para fazer a atualização da lista de usuários.
    
        listaDeUsuariosPromessa.then(response => {
            const listaDeUsuarios = response.data.result;
            this.setState({ listaDeUsuarios: listaDeUsuarios})
        }).catch(error => {
            alert("Não foi possivel achar a lista de usuários");
            this.setState({ listaDeUsuarios: [] })
        })
    }
    componentDidMount(){
        this.buscarListaDeUsuarios()

    }

    apagarUsuario =(idDoUsuario) => {
        const promessaApagarUsuario = axios.delete(`${baseUrl}/users/deleUsers?id=${idDoUsuario}`, {
        headers: {
            'api-token' : "Marina Isabel",
        }
    })

        promessaApagarUsuario.then((response) => {
            alert("Usuario apagado com sucesso");
            this.buscarListaDeUsuario();
        }).catch((error) =>{
            alert("Erro ao apagar o usuário");
            console.log(error.response.data.message);
        })
    }
    

    render() {
        //Lista de usuários sendo cadastrados e X para apagar usuários cadastrados.
        return(
            <ul>
            { this.state.listaDeUsuarios.map(usuario => (
                <ItemDeListaUsuario>{usuario.name} 
                <span onClick={() => this.apagarUsuario(usuario.id)}>X</span>
                </ItemDeListaUsuario>
            ))}
            </ul>
        )
    }
}


export default TelaLista;