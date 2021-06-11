import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
const { SubMenu } = Menu;
const { Sider } = Layout;
function SideMenu(props) {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={["hr"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="config" icon={<UserOutlined />} title="Cấu hình">
          <Menu.Item key="company">Công ty</Menu.Item>
          <Menu.Item key="group">Ban</Menu.Item>
          <Menu.Item key="department">Bộ phận</Menu.Item>
          <Menu.Item key="position">Vị trí</Menu.Item>
          <Menu.Item key="title">Chức danh</Menu.Item>
        </SubMenu>
        <SubMenu key="hr" icon={<LaptopOutlined />} title="Nhân sự">
          <Menu.Item key="/homepage">
            <NavLink to="/">HomePage</NavLink>
          </Menu.Item>
          <Menu.Item key="/users">
            <NavLink to="/users">Danh sách nhân sự</NavLink>
          </Menu.Item>

          <Menu.Item key="/reports">
            <NavLink to="/reports">Báo cáo</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="award"
          icon={<NotificationOutlined />}
          title="Khen thưởng"
        >
          <Menu.Item key="7">Danh sách khen thưởng</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}

export default SideMenu;
