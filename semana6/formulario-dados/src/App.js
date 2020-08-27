import React from 'react';
import './App.css';
import PrimeiroFormulario from './Components/formulario1';
import SegundoFormulario from './Components/formulario2';
import TerceiroFormulario from './Components/formulario3';
import FimFormulario from './Components/fim';




class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {

      etapa: 1,
      PrimeiraPagina:<PrimeiroFormulario/>,
    };
  }

novaEtapa = () => {
  switch (this.state.etapa){
    case 1:
      return <PrimeiroFormulario/>;
    case 2:
      return <SegundoFormulario/>;
    case 3:
      return <TerceiroFormulario/>;
     case 4:
       return <FimFormulario/>;
     default:
       return <FimFormulario/>;   
  }
};

proximaEtapa = () => {
  this.setState({ etapa: this.state.etapa + 1});

};


render() {

  return (
    <div className="App">
      {this.novaEtapa()}
      {this.state.etapa < 4 && (
        <button onClick={this.proximaEtapa}>Próxima etapa</button>
      )}
      </div>
   
  
  );
}

}


export default App;
