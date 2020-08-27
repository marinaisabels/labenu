import React from 'react';
import ToolBar from './components/ToolBar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import styled from 'styled-components'
import thunk from 'redux-thunk'


const Home = styled.div`
    margin-left: 35%; /* metade da largura */
    margin-top: 2%; /* metade da altura */
    position: absolute;
    width: 30%;  
	background-color: #F5F5F5;
	border: 2px solid #ccc;
	border-radius: 70px;
	padding: 30px;
`

const Title = styled.h1`
	text-align:center;
	font-size: 6vw;
	font-family:Arial;
	color: #CD5C5C;
`




// Quando cria um Provider é preciso fazer uma store do redux
//Após o reducer ser feito no todos.js é necessário
//que coloque como parametro da função abaixo.
const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
	return( 
		
			<Provider store={store}>
				<Home>
					<Title>4Task</Title>
						<TaskForm/>
						<TaskList/>
						<ToolBar/>
				</Home>
	        </Provider>
		
		)	
	}


export default App
