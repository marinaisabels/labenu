import React from 'react'
import axios from 'axios'
import CriaMusica from './CriaMusica';




const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";



class CriaPlaylist extends React.Component {
    constructor(props){
        super(props);
        this.state={
            novaPlaylistNome:'',

        };
    }
    
buscarTodasAsPlaylists = () =>{

}

lidaComMudancaNomePlaylist = (event) => {
        this.setState({ novaPlaylistNome: event.target.value});
    }
     
criaNovaPlaylist = () => {
    const dadosNovaPlaylist = {
        name: this.state.novaPlaylistNome
    }

    const promessaDaPlaylist = axios.post (`${baseUrl}/playlists/createPlaylist`, dadosNovaPlaylist,{
        headers:{
            auth: "string",
        }    
    })

    promessaDaPlaylist.then(response => {
        alert("Playlist adicionada com sucesso!");
        this.buscarTodasAsPlaylists();
    }).catch((error) =>{
        console.log(error);
    })
}

render(){
    return(
        
        <div>
    
        <div>
            <h1>SPOTIF4 - Marina </h1>
            <input type="text" placeholder="nova playlist"
             onChange={this.lidaComMudancaNomePlaylist} 
             value={this.state.novaPlaylistNome}/>
            <button onClick={this.criaNovaPlaylist}>nova playlist</button>
            <CriaMusica/>
        </div>
        </div>
    );
}

}

export default CriaPlaylist;