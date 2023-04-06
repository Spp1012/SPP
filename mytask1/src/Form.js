import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [textarea, setTextarea] = useState("");
    const handleLnameChange = (e) => {
        setLname(e.target.value)
      }
      const handleTextChange = (e) => {
        setTextarea(e.target.value)
      }
    const handleSubmit = (e) => {
      e.preventDefault();
      const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const passwordRegex=/\d/;
    //   const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
     if(!emailRegex.test(email))
     { 
           alert("pls valid");
     }
     else if(!passwordRegex.test(password))
     {
            alert("paass valid");
     }
     else
     {
         console.log("from submitted....");
         localStorage.setItem("userName",email);
         window.location.pathname="/Hello";
     }
    }
 const handleEmailChange=(e)=>
 {
    setEmail(e.target.value);
 }
const handlePasswordChange=(e)=>
 {
      setPassword(e.target.value);
 }
 const handleNameChange=(e)=>{
    setName(e.target.value);
 }
  return (
    <div>
   <form onSubmit={handleSubmit} style={{color:"darkred", backgroundColor:"lightblue"}}>
   <label>Enter your firstname:
        <input type="text" value={name}  onChange={handleNameChange}/>
      </label><br/>
      <label>
Enter your Lastname:
   <input type="text"  value={lname} onChange={handleLnameChange}/>
</label>
    <br/>
    <label>
    Enter your email:
        <input type="email"  value={email} onChange={handleEmailChange}/>
    </label>
        <br/>
        <label>
Enter your password:
   <input type="password"  value={password} onChange={handlePasswordChange}/>
</label>
    <br/>
    <label>
Enter your Address:
<textarea value={textarea} onChange={handleTextChange} />
</label>
    <br/>
<button type="submit">Submit</button>
   </form>
    </div>
  )
}
export default Form