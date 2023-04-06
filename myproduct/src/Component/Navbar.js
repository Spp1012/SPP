import React from 'react'


function Navbar() {
  return (
    <div >
         <nav>
    <ul type="none" style={{backgroundColor:"lightblue",color:"darkpink",display:"flex", justifyContent:"space-around"}}>
      <li >
    <a href="/">Home</a>
      </li>
          <li>
           <a href="/about">Aboutus</a> 
         
          </li>
          <li>
          <a href="/Contactus">Contactus</a>
          </li>
          <li>
          <a href="/Productmain">product</a>
          </li>
        </ul>
      </nav>



</div>
  )
}

export default Navbar