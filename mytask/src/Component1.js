import React from 'react'
import {useState} from "react";
import "./App.css";
import Component2 from './Component2';
import UserContext from './Usercontext';

const Component1 = () => {


    const [user, setUser] = useState("shraddha patel");

  return (
    // <div> <h1>{`Hello ${user}!`}</h1>
    // <Component2 user={user} /></div>
    <UserContext.Provider value={user}>
    <h1>{`Hello ${user}!`}</h1>
    <Component2 />
  </UserContext.Provider>
  )
}

export default Component1