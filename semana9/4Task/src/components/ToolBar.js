import React from 'react'
import { connect } from 'react-redux';
import { completeAllTasks, deleteAllComplete, setfilter } from '../actions/task'
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

const Filtros = styled.h3`
    text-align:center;
	font-size: 2vw;
	font-family:Arial;
	color: #CD5C5C;
`
	
const Botoes = styled.div`
	display: flex;
	justify-content: space-evenly;
`


const ToolBar = (props) => {
	return (
		<MuiThemeProvider theme={meuTema}>	
		<div>

			<Button
			variant="contained"
			color="primary"
			size="small"
			onClick={props.completeAllTasks}>Marcar Todas como completas</Button>


		
			<Filtros>Filtros </Filtros>	
			<hr/>		
		<Botoes>
			<Button 
				variant="contained"
				color="primary"
				size="mediun"
			onClick={() => props.setfilter('todas')}>Todas</Button>

			<Button 
				variant="contained"
				color="primary"
				size="small"
			onClick={() => props.setfilter('pendentes')}>Pendentes</Button>

			<Button 
				variant="contained"
				color="primary"
				size="small"
			onClick={() => props.setfilter('completas')}>Completas</Button>
		</Botoes>

		<br/>
			<Button 
			variant="contained"
			color="primary"
			size="small"
			onClick={props.deleteAllComplete}>Remover tarefas completas</Button>
			
		</div>
		</MuiThemeProvider>		
	)
}

const mapDispatchToProps = (dispatch) =>{
	return{
		completeAllTasks: () => dispatch(completeAllTasks()),
		deleteAllComplete: () => dispatch (deleteAllComplete()),
		setfilter: (filter) => dispatch (setfilter(filter))
	}
}


export default connect(null, mapDispatchToProps)(ToolBar);