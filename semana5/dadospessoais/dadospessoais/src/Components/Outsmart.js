import React from 'react'
import './Outsmart.css'

function ExperienciaOutsmart(props) {
    return(

        <div className="dados-container6">
            
                  <img src={ props.imagem}/>
                  <h3> { props.nome } </h3>
                  <p>  { props.texto } </p>
          
        </div>
    )
}
export default ExperienciaOutsmart