import '../App.css';
import Product from "./Product";
 import Image from './4.png';
import I1 from './2.png';
 import I2 from './3.png';

function App() {
  return (
    <div> 
 
  
     <div className="App">
     <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_1" images={Image} price="700" description="this is about product_1" />
 </div>
 <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_2" images={I1} price="500" description="this is about product_2" />
 </div>
 <div style={{float:"left",border:"1px solid red"}}>
      <Product name="product_3" images={I2} price="600" description="this is about product_3" />
 </div>
    </div>
    </div>
);
}

export default App;
