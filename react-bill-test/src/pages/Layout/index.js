import { Button } from "antd-mobile";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getBillList } from "@/store/modules/billStore";

const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBillList());
  }, [dispatch]);
  return (
    <div>
      <Outlet></Outlet>
      Layout
      <Button color="primary">测试全局</Button>
      <div className="purpal">
        <Button color="primary">测试局部</Button>
      </div>
    </div>
  );
};

export default Layout;
