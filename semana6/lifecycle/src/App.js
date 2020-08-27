import React, { useState } from 'react';
import './App.css';

function App () {

    const[tasks, setTask] = useState([]);

    const addTask = (task)  => {
        setTask([...tasks, task]);
    };

    return ( 

        <div className="App">

                <Form onSave={addTask}/>
                <List tasks={tasks}/>

        </div>
    );
}            

export function Form(props){
    const { onSave } = props;

    const [text, setText] = useState("");
    return(
        <div>

            <h1>Lista de Tarefas</h1>
            <input onChange= {e => setText(e.currentTarget.value)}/>
            <button onClick={() => onSave (text) }>Adicionar</button>   
        </div>
    
    );
}


export function List (props) {
   const { tasks } = props;

    return(
        <div>
          {tasks.map(task => {
                return (
                   <div> 
                    <span>{ task }</span>
                    <button>Excluir</button>
                     
                   </div> 
                );
            })}
        
        </div>
    );
}

export function Filtro(){
    
    return(
        <div>

         <label>Filtro</label>
          <select>
            <option value="Nenhum">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>  
        </div>
    
    );
}
  

export default App;
