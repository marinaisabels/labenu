import React from 'react'
import './dadosendereco.css'

function DadosEndereco(props) {
    return(

        <div className="dados-container3">
                  <img src={ props.imagem}/>
                  <h3> { props.nome } </h3>
                  <p>  { props.texto } </p>
          
        </div>
    )
}
export default DadosEndereco