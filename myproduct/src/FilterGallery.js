import React from 'react'
import {useState} from "react";
import "./App.css";
import AllData from "./AllData";



function FilterGallery() {
 const[image,setImage]=  useState(AllData);
  const AllItem=()=>{
      const  finaldata=AllData.filter((value)=> {
        return value;
      });
      setImage(finaldata);
  };

  const onlyReact=(categoryItem)=>{
  const finaldata=AllData.filter((value)=>
  {
       return value.category==categoryItem;
  });
  setImage(finaldata);
  };

  const onlyPython=(categoryItem)=>{
    const finaldata=AllData.filter((value)=>
    {
         return value.category==categoryItem;
    });
    setImage(finaldata);
    };

    const onlyBook=(categoryItem)=>{
      const finaldata=AllData.filter((value)=>
      {
           return value.category==categoryItem;
      });
      setImage(finaldata);
      }
    
  return (
    <div>
<button type="button" onClick={()=> onlyReact("React")}>React</button>
<button type="button" onClick={()=> onlyPython("Python")}>Python</button>
<button type="button" onClick={()=> onlyBook("Book")}>Book</button>
{image.map((val)=>
 {
       return <img src={val.pic} height="200px" width="200px" alt='sorry'/>
 }
 )}


    </div>

  )
}

export default FilterGallery