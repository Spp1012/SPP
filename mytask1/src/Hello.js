import React from 'react'

function Hello() {
    const uname=localStorage.getItem("userName");

  return (
    <div>{uname}</div>
  )
};

export default Hello