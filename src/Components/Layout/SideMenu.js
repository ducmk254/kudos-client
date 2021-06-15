import React from "react";
import { Layout, Menu } from "antd";
import TopicMenu from "./TopicMenu";
// import { NavLink, useLocation } from "react-router-dom";

const { Sider } = Layout;
function SideMenu({ breakpoint }) {
  // const location = useLocation();
  // console.log(location.pathname);
  return (
    <Sider
      width={200}
      className="site-layout-background"
      breakpoint={breakpoint}
      collapsedWidth="0"
    >
      <TopicMenu />
    </Sider>
  );
}

export default SideMenu;
