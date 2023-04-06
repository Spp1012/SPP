import React, {  createContext, useState } from 'react'
import "./App.css";
function UseEffect() {
    const date = new Date();
 
      const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
      useEffect(() => {
        const timer = setInterval(() => {
          const date = new Date();
          setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
          });
        }, 1000);
        return () => clearInterval(timer);
      }, []);
  //  const [count,setCount]=useState(0);
   // const [calculation, setCalculation] = useState(0);
//    const date=new Date();
//    const time=date.toLocaleTimeString();
//    const [t,sett]=useState(time);
//    useEffect(()=>{
//             setInterval(() => {
//             sett(t=>t+1)     
//             }, 1000);
//      },[]);
    // useEffect(() => {
    //   setCalculation(() => count * 2);
    // }, [count]);
    // useEffect(()=>{
    //          setTimeout(() => {
    //      setCount((count)=> count+1);       
    //         }, 1000);
    //  });
// useEffect(()=>{
//      setTimeout(() => {
//    setCount((count)=> count+1);       
//      }, 1000);
// },[]);
  return (
    <div>
{/* <h1>I've rendered {count} times!</h1>; */}
{/* <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}><h1>+</h1></button>
      <h1>Calculation: {calculation}</h1> */}
      {/* <h1>
        {time}
      </h1> */}
     <h1>{dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}</h1>
    </div>
  )
}
export default UseEffect