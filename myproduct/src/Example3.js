import React, { useState } from 'react'

function Example3() {
const [firstname, setFirstname]=useState('');
const [lastname, setLastname]=useState('');
function handleChange(event){
    console.log(event.target.value);
    setFirstname(event.target.value);
   // setLastname(event.target.value);
}
function handleChange1(event){
    console.log(event.target.value);
    //setFirstname(event.target.value);
    setLastname(event.target.value);
}
  return (
    <div>
        
        <input name="firstname" value={firstname} onChange={handleChange}/>
        <input name="lastname" value={lastname} onChange={handleChange1}/>
        <h1>{firstname}</h1>
        <h1>{lastname}</h1>
    </div>
  )
}

export default Example3