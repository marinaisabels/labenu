import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormularioCadastro = styled.form`
    border: 1px solid black;
    border-radius: 40px;
    width: 35vw;
    height: 35vh;
    margin: 50px;
    text-align:center;
    
    
`

const BotaoSalvar =styled.button`
    background-color: #483D8B;
    padding: 14px 17px;
    color: white;
    

`
const Cadastrando = styled.div`
     margin: 50px;
`


const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";


// Mock de Cadastro que é util pra fazer a tela de cadastro (pegue no postman)
// const novoUsuario ={
//     name: "Maria",
//     email: "maria@maria.com"
// }


class TelaCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email:'',
        };
    }



    lidaComMudancaNome = (event) => {
        const novoValor = event.target.value;
        this.setState({ name: novoValor});
    }

    lidaComMudancaEmail = (event) => {
        const novoValor = event.target.value;
        this.setState({ email: novoValor });
    }

    lidaComSalvarUsuario = () =>{
        const novoUsuario = {
            name: this.state.name,
            email: this.state.email
        }

        const promessaDoUsuario = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
            headers: {
                'api-token' : 'Marina Isabel',
            }
        })
         
        promessaDoUsuario.then(responde => {
            alert("Usuário criado com sucesso!");
        }).catch((error) => {
            console.log(error.response.data.message);
        })
    }


    render() {
        return (
            <FormularioCadastro>
                <Cadastrando>
                <label>Nome: </label>
                <input type="text" onChange={this.lidaComMudancaNome}value={this.state.name}/><br/>
                <label>E-mail: </label>
                <input type="email" onChange={this.lidaComMudancaEmail} value={this.state.email}/>
                </Cadastrando>
                <BotaoSalvar onClick={this.lidaComSalvarUsuario}>Salvar</BotaoSalvar>
            </FormularioCadastro>
        );
        
    }
}
   
export default TelaCadastro;