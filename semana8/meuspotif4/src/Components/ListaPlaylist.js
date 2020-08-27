import React from 'react'
import axios from 'axios'


const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";





class ListaPlaylist extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            todasAsPlaylists:[],

        }
    }

    mudaNomeDaLista = (event) => {
        this.setState ({ listaPesquisadaNome: event.target.value})
    }

    
    componentDidMount(){
        this.buscarTodasAsPlaylists()
    }

    buscarTodasAsPlaylists = () => {
        const todasAsPlaylistsPromessa =  axios.get(
            `${baseUrl}/playlists/searchPlaylist?playlistName=${this.state.nomeDaPlaylistProcurada}`, {
            headers :{
                auth: "string",
            }
        })
     
     todasAsPlaylistsPromessa.then(response => {
        this.setState({ todasAsPlaylists: response.data.result});
    }).catch (error => {
    console.log (error)
})
} 

  buscarTodasAsMusicasDeUmaPlaylists = (idDaPlaylist) => {
      const todasAsmusicasPromessa = axios.get(`${baseUrl}/playlists/getPlaylistMusics/${idDaPlaylist}`,{
            headers:{
                auth: 'string',
            }
      })

      todasAsmusicasPromessa.then(response => {
          console.log(response.data.result.musics)
      }).catch(error => {
          console.log (error);
      })
      
  }  


  apagarPlaylist = (idDaPlaylist) => {
    
    const apagarPlaylistPromessa = axios.delete(
    `${baseUrl}/playlists/deletePlaylist?playlistId=${idDaPlaylist}`,{
    headers: {
        auth: "string",
    }
}

)
apagarPlaylistPromessa.then(response => {
    alert ("A Playlist foi apagada com sucesso");
    this.buscarTodasAsPlaylists();
})
 .catch(error =>{
    alert("Erro ao apagar a Playlist");
    console.log(error.response.data.message);
})
}

render(){

    return(
        <div>
             <h1>SPOTIF4 - Marina </h1>
             <h4>Minhas Playlists</h4>

            {this.state.todasAsPlaylists.length === 0 && <p>Carregando...</p>}

        <ul>
             { this.state.todasAsPlaylists.map((playlist) => (
            <li 
            key={playlist.id} 
            onClick={() => this.buscarTodasAsMusicasDeUmaPlaylists(playlist.id)}>{playlist.name}
            </li>
            ))}
        </ul>       
                <input type = 'text' value = { this.state.buscarTodasAsMusicasDeUmaPlaylist}
                    onChange = { this.mudaNomeDaLista}
                    />
                 <button onClick={this.buscarTodasAsPlaylists}>Buscar</button>
                   
         </div>   
    );

   }  

}

   


export default ListaPlaylist;