import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core';
import { applicationForm } from "../../actions/auth";



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
    padding:0 10%;
   
   
`
class ApplicationForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            age:'',
            profession:'',
            country: '',
            text:''
        }
    }

    // componentDidMount(){
    //     const token = window.localStorage.getItem("token")
    //     if(token === null){
    //     this.props.goToLogin();
    //     }
    // }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleApplicationForm = (event) => {
        event.preventDefault();

        const { name, age, applicationText, profession, country, text } = this.state;
        this.props.applicationForm(name, age, applicationText, profession, country, text)
    }; 

    render(){


    return(

        <PageStyle>
            <h2>Formulário do Candidato</h2>
            <FormStyle onSubmit={this.handleApplicationForm}> 
                <TextField 
                    id="filled-name"
                    label="Nome"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="filled"
                    />
                <TextField 
                    id="filled-number"
                    label="Idade"
                    value={this.state.age}
                    onChange={this.handleChange('age')}
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="filled"
                 />
                <TextField
                   id="filled-name"
                   label="Profissão"
                   value={this.state.profession}
                   onChange={this.handleChange('profession')}
                   margin="normal"
                   variant="filled"/>
                <TextField 
                    id="filled-name"
                    label="País"
                    value={this.state.country}
                    onChange={this.handleChange('country')}
                    margin="normal"
                    variant="filled"/>
                    <TextField
                    id="filled-full-width"
                    label="Escreva aqui porque você merece essa viagem!"
                    style={{ margin: 8 }}
                    fullWidth
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                    shrink: true,
                    }}
                 />
                <Button type="submit">Salvar</Button>
            </FormStyle>
            
        </PageStyle>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
    applicationForm: (ame, age, applicationText, profession, country, text) =>
    dispatch (applicationForm(ame, age, applicationText, profession, country, text))
})

export default connect(null, mapDispatchToProps)(ApplicationForm);