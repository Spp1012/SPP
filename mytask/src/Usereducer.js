import React, {useReducer} from 'react';
export const Usereducer = () => {
 const [sum,dispatch]=useReducer((state,action)=>
 {return state + action;
},0);

  return (
    <div>
        <h1>{sum}</h1>
   <button onClick={()=>dispatch(1)}><h1>Add1</h1></button>


    </div>
  )
}
export default Usereducer