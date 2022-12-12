import { Outlet } from "react-router-dom";
import ProductNav from "./ProductNav";


const Layout = () => {
  return (
    <div>
      <ProductNav />
      <Outlet />
    </div>
  );
};

export default Layout;