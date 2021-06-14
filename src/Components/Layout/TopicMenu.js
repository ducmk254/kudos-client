import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  // MailOutlined,
  // AppstoreOutlined,
  // SettingOutlined,
} from "@ant-design/icons";
import { useLocation, NavLink } from "react-router-dom";

const { SubMenu } = Menu;
function TopicMenu(props) {
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
  // const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };

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
                  <Menu.Item key={`/${item[0]}`}>
                    <NavLink to={`/${item[0]}`}>{item[1]}</NavLink>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        });
      })}
    </Menu>
    // <Menu
    //   style={{ width: 256 }}
    //   defaultSelectedKeys={["1"]}
    //   defaultOpenKeys={["sub1"]}
    //   mode="inline"
    //   inlineCollapsed={collapsed}
    // >
    //   <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
    //     <Menu.ItemGroup key="g1" title="Item 1">
    //       <Menu.Item key="1">Option 1</Menu.Item>
    //       <Menu.Item key="2">Option 2</Menu.Item>
    //     </Menu.ItemGroup>
    //     <Menu.ItemGroup key="g2" title="Item 2">
    //       <Menu.Item key="3">Option 3</Menu.Item>
    //       <Menu.Item key="4">Option 4</Menu.Item>
    //     </Menu.ItemGroup>
    //   </SubMenu>
    //   <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
    //     <Menu.Item key="5">Option 5</Menu.Item>
    //     <Menu.Item key="6">Option 6</Menu.Item>
    //     <SubMenu key="sub3" title="Submenu">
    //       <Menu.Item key="7">Option 7</Menu.Item>
    //       <Menu.Item key="8">Option 8</Menu.Item>
    //     </SubMenu>
    //   </SubMenu>
    //   <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
    //     <Menu.Item key="9">Option 9</Menu.Item>
    //     <Menu.Item key="10">Option 10</Menu.Item>
    //     <Menu.Item key="11">Option 11</Menu.Item>
    //     <Menu.Item key="12">Option 12</Menu.Item>
    //   </SubMenu>
    // </Menu>
  );
}

export default TopicMenu;
