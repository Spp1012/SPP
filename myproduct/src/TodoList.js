import React from 'react'
import {useState} from "react";
import "./App.css";

function TodoList() {
  const [firstname, setFirstname]=useState('');
  const [todos,setTodoList]=useState([]);
  function update(e)
  {
        setTodoList([...todos,firstname]);
  }
  function handleChange(event){
    setFirstname(event.target.value);
};
const deleteTask=(taskName)=>{
console.log(taskName);
   setTodoList(
 todos.filter((task)=>
 {
  if(task!==taskName)
{
return true;
}else{
  return false;
}
 }
 ));
 };
  return (
    <div>
<input name="firstname" value={firstname} onChange={handleChange}  />
<input type="submit" onClick={update}/>
{todos.map((value)=>
    {
       return <h1> {value}</h1>
    })}

{todos.map((task)=>
    {
       return (
        <div>
       <h1> {task}</h1>
       <button onClick={()=>deleteTask(task)}>delete</button>
       </div>
       )
    })}
    </div>

  )
  
}
export default TodoList