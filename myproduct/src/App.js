import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Example from "./Example";
 import Productmain from "./Component/Productmain";
// import Image from './4.png';
// import I1 from './2.png';
// import I2 from './3.png';
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Aboutus from "./Component/Aboutus";
import Contactus from "./Component/Contactus";
import Footer from "./Component/Footer";
import Example2 from "./Example2";
import SimpleImage from "./SimpleImage";
import SetImage from "./SetImage";
import Demo from "./Demo";
import Task from "./Task";
import Gallery from "./Gallery";
import Example3 from "./Example3";
import TodoList from "./TodoList";
import FilterGallery from "./FilterGallery";
import UseEffect from "./UseEffect";
function App() {
  return (
    <div> 
 <Navbar/>
   <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="about" element={<Aboutus/>} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Productmain" element={<Productmain />} />
      </Routes>
    </Router>
<Footer/>
     {/* <div className="App">
     <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_1" images={Image} price="700" description="this is about product_1" />
 </div>
 <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_2" images={I1} price="500" description="this is about product_2" />
 </div>
 <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_3" images={I2} price="600" description="this is about product_3" />
 </div>
    </div> */}
      <Example/>
      <Example2/>
   <SimpleImage/>
   <Demo/>
   <SetImage/>
   <Task/>
  <Gallery/>
  <Example3/>
  <TodoList/>
  <FilterGallery/>
  <UseEffect/>
    </div>
);
}

export default App;
