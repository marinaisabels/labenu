import React from 'react'
import axios from 'axios'


const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";





class CriaMusica extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            novaMusicaDaPlaylist:'',

        };
    }

    buscarTodasAsMusicas = () =>{

    }
    
    lidaComMudancaNomeMusica = (event) => {
            this.setState({ novaMusicaNome: event.target.value});
        }

    criaNovaMusica = () => {
        const dadosNovaMusica = {
            name: this.state.novaMusicaNome
        }
    
        const promessaDaMusica = axios.put (`${baseUrl}/playlists/addMusicToPlaylist`, dadosNovaMusica,{
            headers:{
                auth: "string",
            }    
        })
    
        promessaDaMusica.then(response => {
            alert("Musica adicionada com sucesso!");
            this.buscarTodasAsMusicas();
        }).catch((error) =>{
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <input type="text" placeholder="nova musica"
                onChange={this.lidaComMudancaNomeMusica} 
                value={this.state.novaMusicaNome}/>
                <button onClick={this.criaNovaMusica}>adicionar uma nova musica</button>
            </div>
        )
    }
} 



    

    export default CriaMusica;
