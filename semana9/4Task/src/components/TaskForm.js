import React from 'react'
import { connect } from 'react-redux'
import { addTask, createTask } from '../actions/task'
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import styled from 'styled-components'


const meuTema = createMuiTheme ({
	palette:{
		primary: {
			main: '#F5F5F5'
		},
		secondary: {
			main:'#CD5C5C'
		}
	}
})

const Input = styled.input`
	margin-top: -20%;
	margin-left:5%;
	width: 70%;
	padding: 9px 15px;
	border: 2px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
	background-color: whitesmoke;

`

class TaskForm extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			inputText: ''
		}
	}
  
	onChangeInput = (event) =>{
		this.setState({inputText: event.target.value})
	}
	onClickAdicionar = () => {
		this.props.createTask(this.state.inputText)

	}

	
	render() {
			return (
			<MuiThemeProvider theme={meuTema}>	
			<form>
				<Input value={this.state.inputText} onChange={this.onChangeInput} placeholder="O que tem que ser feito?"></Input>
				<Button 
					variant="contained"
					color="primary"
					size="LARGE"
				type= "button" onClick={this.onClickAdicionar}>Adicionar</Button>
			</form>
			</MuiThemeProvider>
		)
	}
}



//Fazer alterações no estado do redux 

// const mapDispatchToProps = (dispatch) =>{
// 	return{
// 		addTask: (text) => {
// 			dispatch(addTask(text))
// 		}
// 	}
// }



const mapDispatchToProps = (dispatch) => {
	return{
		createTask: text => dispatch(createTask(text))
	}
}


export default connect(null, mapDispatchToProps)(TaskForm);
