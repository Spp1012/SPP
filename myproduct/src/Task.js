import React from 'react'
import {useState} from "react";
import "./App.css";

function Task() {
    const [num,setNum]=useState('cyan');

  function update(){
  setNum('blue');
  }
  return (
    <div>
{/* <img src={img1}/> */}
<button onClick={update}>BackgroundColor</button>
<p style={{backgroundColor:num}}>this is demo</p>
    </div>
  )
}

export default Task