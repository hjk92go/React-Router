import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Product = () => {
    const [value, setValue] = useState();
    const Value=(e) => {
        setValue(e.target.value)
    }
    return ( 
        <div>
            <Link to='/Home'>Home{"  "}</Link>
            <Link to='/About'>About{"  "}</Link>
            <Link to='/Product'>Product{"  "}</Link>
            <h1>값을 입력받아서 페이지를 이동합니다.</h1>
            <input value={value} type='text'                    onChange={Value}></input>
            <Link to={`/Product/${value}`}>페이지이동</Link>
        </div>
     );
}
 
export default Product;