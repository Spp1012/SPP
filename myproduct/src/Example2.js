import React from 'react'

function Example2() {
    const arr=[1,2,3,4,5];
    const newarr=arr.filter((num)=>
    {
         if(num === 3){
                 return false;
         }
         else
        return true;


    });
  return (
    
          
<div>
the new array is {arr}
    </div>
  )
}

export default Example2