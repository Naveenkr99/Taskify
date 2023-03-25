import React, { useState } from 'react';
import './App.css'
import {InputField} from './components/InputField'
import TodoList from './components/TodoList';
import { Todo } from './model';

// type Person={
//   name:string;
//   age:number
// }
// let person:Person={
//   name:"Piyush",
//   age:34
// }


const App:React.FC=()=>{

  const[todo,setTodo]=useState<string>("");
  const[todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{
      e.preventDefault();
      if(todo){
        setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      }
  }
  console.log(todos);


  return (
    <div className="App">  
       <span className="heading"> Taskify</span> 
       <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
       <TodoList tasks={todos} setTasks={setTodos}/>
    </div>
  );
}

export default App;
