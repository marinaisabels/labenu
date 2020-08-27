import React from 'react'
import './RedeSocial.css'

function RedeSociais(props) {
    return(

        <div className="dados-container7">
            
                  <img src={ props.imagem}/>
                  <h3> { props.nome } </h3>
                  <p>  { props.texto } </p>
          
        </div>
    )
}
export default RedeSociais