import About from "./About";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import {BrowserRouter, Route, Routes} from 'react-router-dom'



const TestIndex = () => {
    
    return ( 
        <div>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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