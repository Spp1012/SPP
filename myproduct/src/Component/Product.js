import React from 'react'
function Product(props) {
  return (
    <div>
        <h1>{props.name}</h1>
    <img style={{height:250,width:250}} src={props.images}/>
    <p>{props.price}</p>
    <p>{props.description}</p>
    </div>
    
  )
}

export default Product