import About from "./About";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductNav from "./ProductNav";


const TestIndex = () => {
    
    return ( 
        <div>
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/product' element={<Product/>}></Route>
            <Route path='/product/:value' element={<ProductDetail/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
     );
}
 
export default TestIndex;