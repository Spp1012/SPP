import React from 'react'

function Example() {
    const arr=[1,2,3,4,5];
  return (
    <div>
  <center><h1>demo example</h1></center>
  {
    arr.map((value,key)=>
    {
       return <h1>The array items are: {value}</h1>

    })
  }
    </div>
  )
};

export default Example