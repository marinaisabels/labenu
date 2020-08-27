import axios from 'axios';

export const createTask = text => async (dispatch, getState) => {
	try {
	  await axios.post ("https://us-central1-missao-newton.cloudfunctions.net/generic/planner-marina", {text});

	// dispatch(getTask())

	} catch (error){console.log(error)}

}

export const getTask = () => async (dispatch, getState) => {
	const result = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/generic/marina-aluno")
	console.log(result.data)
	dispatch(setTask(
			result.data.todos 
		)
	)
} 