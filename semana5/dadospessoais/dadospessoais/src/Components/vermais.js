import React from 'react'
import './vermais.css'

function BotaoVerMais (props){
    return(
        <div className="dados-container4">
           
            <img src={ props.imagem } />
            <h2>{ props.texto }</h2>

    
        </div>

    )
}

export default BotaoVerMais