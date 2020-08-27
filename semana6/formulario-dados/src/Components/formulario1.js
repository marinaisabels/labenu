import React from 'react';



class PrimeiroFormulario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        

        };
    }

 
    render() {
      return (
        <form>
          <header >
          <h3>ETAPA 1 - DADOS GERAIS</h3>
        </header>
        <div>
          <p>1. Qual é o seu nome?</p>
          <input type="text" alt=""/>
        </div>
  
        <div>
          <p>2. Qual é a sua idade?</p>
          <input type="text" alt=""/>
        </div>
  
        <div>
          <p>3. Qual é o seu email?</p>
          <input type="text" alt=""/>
        </div>
  
        <div>
          <p>4. Qual a sua escolaridade?</p>
          <select>
            <option value="Ension médio incompleto">Ensino médio incompleto</option>
            <option value="Ension médio incompleto">Ensino médio completo</option> 
            <option value="Ension médio incompleto">Ensino superior incompleto</option>
            <option value="Ension médio incompleto">Ensino superior completo</option>         
          </select>
        </div>
    

        </form>
      );
    }
  }
  
  export default PrimeiroFormulario;