import React from 'react'
import './dadosp.css'

function MeusDados(props) {
    return(

        <div className="dados-container1">
                  
                  <img src={ props.imagem}/>
                  <h3> { props.nome } </h3>
                  <p>  { props.texto } </p>
          
        </div>
    )
}
export default MeusDados

