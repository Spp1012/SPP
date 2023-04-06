import React from 'react'
import {useState} from "react";
import "./App.css";
function Demo() {
 const [num,setNum]=useState(20);
//  function update()
//  {

//     setNum(num+1);
//  }
 function increment()
 {

    setNum(num+1);
 }
 function decrement()
 {
if(num>0){
    setNum(num-1);
}else{

    return false; 
}
 }
    
  return (
    <div>
<h1>
<button onClick={increment}>Increment</button>
<p>My age is{num}</p>
<button onClick={decrement}>Decrement</button>

{/* <p>My age is{num}</p> */}</h1>
    </div>
  );
}

export default Demo