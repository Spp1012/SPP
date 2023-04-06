import React from 'react'
import {useState} from "react";
import "./App.css";

function Gallery() {
    const [buttonText, setButtonText] = useState('Click');
    const [text1,setText]=useState('');

    function update() {
      setButtonText('Click here');
      setText('show');
    }
    return (
      <div>
        <button onClick={update}>{buttonText}</button>
        <p>{text1}</p>
      </div>
    );
  };
  

export default Gallery