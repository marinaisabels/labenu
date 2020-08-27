import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { routes } from '../Router'
import { push } from 'connected-react-router'



const FormStyle = styled.form`
    border: 2px solid gray;
    width: 50%;
    text-align:center;  
    display:flex;
    justify-content: space-around;
    flex-flow: row wrap;
    background-color: orange;
    color:black;

    
`
const PageStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    width: 100%;
    padding:0 30%;
   
   
`



class CreateTripPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        planet:'',
        date:'',
        description:'', 
        durationInDays:''
      };
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };



    render(){
    return(
        <div>
            <PageStyle>
                <h2>Criando uma nova Viagem Espacial</h2>    
                <FormStyle>
                <TextField 
                    id="filled-name"
                    label="Nome"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                    />
                <TextField 
                    id="filled-name"
                    label="Planeta"
                    value={this.state.planet}
                    onChange={this.handleChange('planet')}
                    margin="normal"
                    variant="filled"
                    />
                <TextField 
                    id="filled-name"
                    label="Data"
                    value={this.state.date}
                    onChange={this.handleChange('date')}
                    margin="normal"
                    variant="filled"
                    />
                <TextField 
                    id="filled-name"
                    label="Descrição"
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                    variant="filled"
                    />
                 <TextField 
                    id="filled-number"
                    label="Duração dos Dias"
                    value={this.state.durationInDays}
                    onChange={this.handleChange('durationInDays')}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="filled"
                 />
                <Button onClick={this.goToListTripsPage}>Criar Viagem</Button>
                </FormStyle>
                <Button >Clique aqui para ver a lista de condidatos!</Button>
            </PageStyle>
        </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return{
        goToListTripsPage:() => dispatch(push(routes.tripslist)),
        
    }
}

export default connect(null, mapDispatchToProps)(CreateTripPage)