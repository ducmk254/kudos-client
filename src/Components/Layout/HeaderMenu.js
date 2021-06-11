import React from "react";
import { Layout, Menu } from "antd";
import { useLocation, NavLink } from "react-router-dom";
const { Header } = Layout;

function HeaderMenu(props) {
  const location = useLocation();
  return (
    <Header className="header" mode="inline">
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[location.pathname]}
        style={{ display: "float" }}
      >
        <Menu.Item key="homepage">
          <NavLink to="/">Homepage</NavLink>
        </Menu.Item>
        <Menu.Item key="config">Cấu hình</Menu.Item>
        <Menu.Item key="hr">Nhân sự</Menu.Item>
        <Menu.Item key="award">Khen thưởng</Menu.Item>
      </Menu>
    </Header>
  );
}
export default HeaderMenu;
