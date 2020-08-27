import React from 'react'
import './dadosmail.css'

function DadosDoMail (props){
    return(
        <div className="dados-container2">
        
            <p>  { props.texto } </p>
            <img src={ props.imagem}/>
            
    
        </div>

    )
}

export default DadosDoMail