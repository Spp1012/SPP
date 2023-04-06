import logo from './logo.svg';
import './App.css';
import Example from "./Example";

function App() {
  
   const abc="hello gud morning...";
  return (
    <div className="App">
  <Example fname={abc} age="27"/>
  <Example fname="ZPB" age="29"/>
 
    </div>
  );
}

export default App;

