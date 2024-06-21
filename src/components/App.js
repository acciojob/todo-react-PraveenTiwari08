
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

  const Delete = (itemToDelete) => {
     const deleteTodo = Todos.filter((item)=> item !== itemToDelete);
     setTodos(deleteTodo);
  }
  
  const todoAddInLi = Todos.map((value,index)=>{
      return <><li key={index}>{value}</li>
      <button  onClick={() =>Delete(value)}>Delete Todo</button></>
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
