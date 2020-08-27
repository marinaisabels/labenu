import React from 'react';
import './App.css';
import TelaCadastro from './Components/TelaCadastro';
import TelaLista from './Components/TelaLista';






class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        telaAtual: 'cadastro' 
      }
    }

    //Método responsável por mudar a Tela (quando ele estiver em cadastro ele manda pra lista e vice-versa)
    lidaComMudancaDeTela = () => {
      if (this.state.telaAtual === 'cadastro'){
        this.setState({ telaAtual: 'lista'})
      } else {
        this.setState({ telaAtual: 'cadastro'})
      }
    }




    render(){
      // Método responsável para mudar o estado do botão 
      const textoDoBotao = this.state.telaAtual === 'cadastro' ? 'Ir para lista de cadastrados': 'Ir para o cadastro do usuário';

         return (
         
           <div>
            <button onClick={this.lidaComMudancaDeTela}>{ textoDoBotao }</button>
            { this.state.telaAtual === 'cadastro' ?
            <TelaCadastro/> :
            <TelaLista/>
            }
          </div>
 
        );
      }
    }


export default App;
