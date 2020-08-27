import React from 'react';



class SegundoFormulario extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        

        };
    }

 
    render() {
      return (
        <form>
          <header >
          <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        </header>
        <div>
          <p>5. Qual CURSO?</p>
          <input type="text" alt=""/>
        </div>
  
        <div>
          <p>6. Qual a unidade de ensino?</p>
          <input type="text" alt=""/>
        </div>
       

        </form>
      );
    }
  }
  
  export default SegundoFormulario;