import React from 'react';



class TerceiroFormulario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        

        };
    }

 
    render() {
      return (
        <form>
          <header >
          <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        </header>
        <div>
          <p>7. Por que você não terminou um curso de graduação?</p>
          <input type="text" alt=""/>
        </div>
  
          <p>8. Você fez algum curso complementar?</p>
          <select>
            <option value="Nenhum">Nenhum</option>
            <option value="Curso Técnico">Curso Técnico</option> 
            <option value="Curso de Inglês">Curso de Inglês</option>       
          </select>
    
  

        </form>
      );
    }
  }
  
  export default TerceiroFormulario;