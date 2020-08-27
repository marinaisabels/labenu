import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const StyleActivity = styled.div`
    border: 1px solid black;
    border-radius: 40px;
    width: 92vw;
    height: 80vh;
    margin: 50px;
    text-align:center;
    background-color: #FF6347;
`
const Title = styled.h2`
    font-family: cursive;
    color: white;
`

const ImagemIlustatriva = styled.img`
    width: 40vw;
    height:30vh;
    border-radius:70px;
`
const Lista = styled.div`
    font-family: cursive;
    color: white;
    font-size: 17px;
`


class BoredAPI extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentActivity: undefined, 
            numberOfParticipants: 1,
        }
    }

    handleChangeParticipants = (event) => {
        const newParticipantsCount= event.target.value;
        this.setState({ numberOfParticipants :newParticipantsCount})
    }

    getActivity = async () => {
        const response = await axios.get(`http://www.boredapi.com/api/activity?participants=${this.state.numberOfParticipants}`);

        this.setState({ currentActivity : response.data});
    }

    render(){
        return(
            <StyleActivity>
                <ImagemIlustatriva src="https://images.unsplash.com/photo-1500995617113-cf789362a3e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"/>
                <Title>Atividades para agitar o seu dia</Title>
            
                <input type ="number" value={this.state.numberOfParticipants} onChange={this.handleChangeParticipants}/>
                <button onClick={this.getActivity}>Próxima Atividade</button>
                { this.state.currentActivity &&
                     <Lista>
                         <p>Atividade: {this.state.currentActivity.activity}</p>
                         <p>Participantes: {this.state.currentActivity.participants}</p>
                         <p>Acessibilidade: {this.state.currentActivity.accessibility}</p>
                         <p>Tipo: {this.state.currentActivity.type}</p>
                         <p>Preço: {this.state.currentActivity.price}</p>
                     </Lista>
                }
            </StyleActivity>

        )
    }
}





export default BoredAPI 