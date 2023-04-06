import React from 'react'
import {useState} from "react";
import "./App.css";
import Image from "./Image/Img1.png"; 
import I1 from "./Image/Img2.png";
function SetImage() {
    const [img1,setImg]=useState(Image);

  function image(){
  setImg(I1);
  }
  return (
    <div>
<img src={img1}/>
<button onClick={image}>Image</button>
    </div>
  )
}

export default SetImage