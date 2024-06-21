
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [Todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState("");

  const inputvalue = (e) => {
    setInputValue(e.target.value);
  }

  const addTodo = () =>{
    setTodos([...Todos,inputValue])
    setInputValue("");
  }

  const Delete = () =>{
    const Remove = Todos.splice(index,1);
    setTodos([...Todos]);
  }
  
  const todoAddInLi = Todos.map((value,index)=>{
      return <div><li>{value}</li>
      <button key={index} onClick={Delete}>Delete Todo</button></div>
  })
  return (
    <div>
       <h1>todo-list</h1>
       <input value={inputValue} onChange={inputvalue}/>
       <button onClick={addTodo}>Add Task</button>
       <ul>
        <li>
          {todoAddInLi}
        </li>
       </ul>
    </div>
  )
}

export default App
