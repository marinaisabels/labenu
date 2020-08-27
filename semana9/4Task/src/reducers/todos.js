//A lista começa vazia no estado inicial 

const initialState = {
	todosList: [{
		id: 1,
		text: 'First Task',
		complete: false
	}],
	filter:'todas'
}

export const todos  = (state = initialState, action) => {
	switch(action.type) {
		case "SET_TASK":
			const taskList = action.payload.taskList
			return {
				...state,
				todosList: [...taskList, ...state.todosList]
			}
		case "TOGGLE_TASK":{
			const newTodosList = state.todosList.map(todo =>{
				if(todo.id === action.payload.id) {
					return {
						...todo,
						complete: !todo.complete
					}
				}
				return todo 
			})
			return{
				...state,
				todosList: newTodosList
			}	
	}	
		case "DELETE_TASK": {
			const newTodosList = state.todosList.filter(todo =>{
				if(todo.id === action.payload.id){
					return false
				}
					return true
			})	
					return {
						...state,
						todosList: newTodosList
					
					}
				}	
		case "COMPLETE_ALL_TASKS":{
			const newTodosList = state.todosList.map(todo =>{
				return {
					...todo,
					complete: true
				}
			})
				return {
					...state,
					todosList: newTodosList
				}
		}	
		case "DELETE_ALL_COMPLETE":{
			const newTodosList = state.todosList.filter(todo =>{
				if(todo.complete){
					return false
				}
				return true
			 })
				return {
					...state,
					todosList: newTodosList
				}
		}
		case "SET_FILTER":{
			return{
				...state,
				filter: action.payload.filter
			}
		}	
		default:
			return state
	}
}