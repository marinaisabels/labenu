import React from 'react'
import './future4.css'

function ExperienciaFuture(props) {
    return(

        <div className="dados-container5">
                  <img src={ props.imagem}/>
                  <h3> { props.nome } </h3>
                  <p>  { props.texto } </p>
          
        </div>
    )
}
export default ExperienciaFuture