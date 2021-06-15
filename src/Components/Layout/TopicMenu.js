import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { useLocation, NavLink } from "react-router-dom";

const { SubMenu } = Menu;
function TopicMenu({ handleOnClick }) {
  const rootSubmenuKeys = [
    { config: "Cấu hình" },
    { hr: "Nhân sự" },
    { award: "Khen thưởng" },
  ];

  const subItems = [
    {
      company: "Công ty",
      group: "Ban",
      department: "Bộ phận",
      position: "Vị trí",
      title: "Chức danh",
    },
    {
      homepage: "Homepage",
      users: "Danh sách nhân sự",
    },
    { award: "Danh sách khen thưởng" },
  ];
  const returnIcons = (index) => {
    switch (index) {
      case 0:
        return <UserOutlined />;
      case 1:
        return <LaptopOutlined />;
      default:
        return <NotificationOutlined />;
    }
  };
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState(rootSubmenuKeys[1][1]);

  return (
    <Menu
      mode="inline"
      defaultOpenKeys={openKeys}
      defaultSelectedKeys={[location.pathname]}
      style={{
        width: "100%",
        height: "100%",
        borderRight: 0,
        backgroundColor: "#343a40",
        fontWeight: "bold",
      }}
      theme="dark"
    >
      {rootSubmenuKeys.map((submenu, index) => {
        const menu = Object.entries(submenu);
        const items = Object.entries(subItems[index]);

        return menu.map((inde) => {
          return (
            <SubMenu
              key={menu[0][0]}
              icon={returnIcons(index)}
              title={menu[0][1]}
            >
              {items.map((item, id) => {
                return (
                  <Menu.Item key={`/${item[0]}`} onClick={handleOnClick}>
                    <NavLink to={`/${item[0]}`}>{item[1]}</NavLink>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        });
      })}
    </Menu>
  );
}

export default TopicMenu;
