import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Outlet></Outlet>
      Layout
    </div>
  );
};

export default Layout;
