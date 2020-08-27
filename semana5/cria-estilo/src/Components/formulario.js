import React from 'react'
import styled from 'styled-components'



const Postagem = styled.div` 
` 
const Form = styled.form`
       width:100%;
       padding: 12px 20px;
       margin: 8px 0;
       box-sizing: border-box;
       border: 3px solid gray;
`  






class FormularioPost extends React.Component{
    constructor(props){
        super(props);
        this.state ={ nome:''};
        
    }
  meuFormulario = (event) => {
      this.setState({nome: event.target.value});
  }

  meuPerfil = (event) =>{
      this.setState({perfil: event.target.value});
  }
    
  meuPost = (event)  =>{
      this.setState({post: event.target.value});
  }


    render(){
        return(


            <Form>
            <form>
                <p>NOME:{this.state.nome}</p>
                <input type='text' onChange={this.meuFormulario}/>
                <p>Perfil:</p>
                <input type='text' onChange={this.meuPerfil}/>
                <p>Post:</p>
                <input type='text' onChange={this.meuPost}/>
                <button onClick={this.NovoPost}>Novo Post</button>
            </form>
            </Form>
        )
    }

}

export default FormularioPost