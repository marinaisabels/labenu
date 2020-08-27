import React from 'react';
import './App.css';
import CriaPlaylist from './Components/CriaPlaylist';
import ListaPlaylist from './Components/ListaPlaylist';


class App extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        telaAtual: 'nova playlist',
        
      }
    }

    lidaComMudancaDeTela = () => {
      if (this.state.telaAtual === 'nova playlist'){
        this.setState({ telaAtual: 'lista'})
      }else {
        this.setState ({ telaAtual: 'nova playlist'})
      }
    }

    render (){
       const textoDoBotao = this.state.telaAtual === 'nova playlist' ? 'ir para a lista de playlists' : 'Adicionar nova playlist';
          return (
            <div>
              <button onClick={ this.lidaComMudancaDeTela }>{ textoDoBotao }</button>
              { this.state.telaAtual === 'nova playlist' ?
              <CriaPlaylist/> :
              <ListaPlaylist/>
              }
          
            </div>
          );
        }
      }

export default App;
