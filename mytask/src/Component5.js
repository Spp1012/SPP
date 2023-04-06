import {useContext} from 'react'
import {useState} from "react";    
import "./App.css";
import UserContext from './Usercontext';
function Component5() {
    const user = useContext(UserContext);
  return (
    <div> <h1>Component 5</h1>
    <h2>{`Hello ${user} again!`}</h2></div>
  )
}

export default Component5