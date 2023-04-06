import React from 'react'
import Image from "./Image/Img1.png"; 
import I1 from "./Image/Img2.png";
function SimpleImage() {
    const images=[{
              id:1,
              pic:Image
    },{
        id:2,
        pic:I1
}
];
  return (
    <>
 {images.map((val)=>
 {
       return <img src={val.pic} height="200px" width="200px" alt='sorry'/>
 }
 )}
 </>
  );
};

export default SimpleImage