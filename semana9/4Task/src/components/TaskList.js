import React from 'react'
import { connect } from 'react-redux'
import { toggleTask, toggleTasks } from '../actions/task'
import { deleteTask, deleteTasks } from '../actions/task'
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

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


//É preciso mostrar a lista de tarefas aqui, para isso acontecer
//é necessário utilizar a connect, para conectar a lista com o reducer
class TaskList extends React.Component {
	render(){
		console.log(this.props.taskList)
			return(
			<MuiThemeProvider theme={meuTema}>
				<ul>
					{this.props.taskList.filter((task) =>{
						const filter = this.props.filter
						if(filter === 'pendentes'){
						return task.complete === false
						}
						if(filter === 'completas'){
						return task.complete === true
						}
						return true 	
							}).map(task =>
							<li key={task.id} onClick=
							{() => this.props.toggleTask(task.id)}>
							{task.text} 
							{/* - Completa: */}
							{/* {String(task.complete)} */}
					<Button 
						variant="contained"
						color="primary"
						size="small"
					onClick={() => this.props.deleteTask(task.id)}>Deletar</Button>
					</li>
					)}		
				</ul>
			 </MuiThemeProvider>
		)
	}
}


//Mapear o estado do redux para a props.
const mapStateToProps = (state)  =>{
	return {
		taskList: state.todos.todosList,
		filter: state.todos.filter
	}
}



const mapDispatchToProps = (dispatch) => {
	return{
		toggleTask: id => dispatch(toggleTasks, toggleTask(id)),
		deleteTask: id => dispatch(deleteTasks, deleteTask(id))
	}
}


//exportar as funções no connect
export default connect (mapStateToProps, mapDispatchToProps)(TaskList);