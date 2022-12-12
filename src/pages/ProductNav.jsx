import { Link, NavLink, Outlet } from "react-router-dom";

const ProductNav = () => {
    return ( 
        <div>
            <NavLink>
            <Link to='/Home'>Home{"  "}</Link>
            <Link to='/About'>About{"  "}</Link>
            <Link to='/Product'>Product{"  "}</Link>
            </NavLink>
        </div>
    );

}
 
export default ProductNav;