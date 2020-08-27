import axios from 'axios'


// Fazer alterações no estado Global


export const setTask = (taskList) => {
		return {
			type: "SET_TASK",
			payload: {
				taskList 
				
		}
	}
}

export const toggleTask = (id) => {
		return {
			type: "TOGGLE_TASK",
			payload: {
				id
		}
	}
}

//informação para deletar a tarefa e completar tarefa são apresentadas no id (para identificar)

export const deleteTask = (id) => {
		return {
			type: "DELETE_TASK",
			payload: {
				id
		}
	}
}

export const completeAllTasks = () => {
	return {
		type: "COMPLETE_ALL_TASKS",
	
	}
}


export const deleteAllComplete= () => {
	return{
		type: "DELETE_ALL_COMPLETE",
	};

}

export const setfilter = (filter) => {
		return {
			type: "SET_FILTER",
			payload: {
				filter
		}
	}
}

export const getTask = () => async (dispatch, getState) => {
	const result = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/marina/todos")
	console.log(result.data)
	dispatch(setTask(
			result.data.todos 
		)
	)
} 



export const createTask = text => async (dispatch, getState) => {
	try {
	  await axios.post ("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/marina/todos", {text});

	dispatch(getTask())

	} catch (error){console.log(error)}

}


//Assistir aulas API, mudar o id

export const deleteTasks = () => async (dispatch, getState) => {
	const response = await axios.del("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/marina/todos/id");

	dispatch(deleteTask(response.data.del.id))
}


// export const getTask = () => async (dispatch, getState) => {
// 	const result = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/marina/todos")

// 	dispatch(setfilter(
// 			result.data.todos,
// 			result.data.id,
// 			result.data.done 
// 		)
// 	)
// } 


export const toggleTasks = id => async (dispatch, getState) =>{
	const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/marina/todos/id/toggle")
	dispatch(toggleTask(response.data.put.id))
}
