import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RandomJoke from './RandomJoke';
import Form from './Form';
import Hello from './Hello';
function App() {
  return (
    <div className="App">
     <RandomJoke/>
     <Router>
      <Routes>
        <Route exact path="/" element={<Form/>}/>
        <Route path="Hello" element={<Hello/>} />
      </Routes>
    </Router>
{/*    
<Hello/>
     <Form/>
     */}
    </div>
  );
}

export default App;
