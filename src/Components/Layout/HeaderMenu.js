import React, { useState } from "react";
import { Button, Layout } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";
import { SearchOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import TopicMenu from "./TopicMenu";
// import SideMenu from "./SideMenu";
// const { Header } = Layout;
function HeaderMenu({ children }) {
  // const location = useLocation();
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(false);
  };
  return (
    <div className="header">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined style={{ fontSize: "2rem" }} />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Dashboard"
        placement="left"
        // onClick={onClick}

        onClose={() => setVisible(false)}
        visible={visible}
        className="show-hide-top-menu"
      >
        <TopicMenu handleOnClick={onClick} />
      </Drawer>

      <NavLink
        activeClassName="nav-primary-active"
        to="/"
        className="nav-primary__item"
      >
        <img
          src="https://mutosi.com/images/config/170x57_1620113130.png"
          alt="mutosi logo"
          // style={{ width: "50%", height: "50%" }}
        />
      </NavLink>
      <form className="nav-search__form">
        <input
          type="text"
          placeholder="Tìm kiếm ..."
          className="nav-search__input"
        ></input>
        <SearchOutlined className="nav-search__icon" />
      </form>
      <ul className="nav-primary">
        <NavLink
          activeClassName="nav-primary-active"
          to="/"
          className="nav-primary__item"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="nav-primary-active"
          to="/config"
          className="nav-primary__item"
        >
          Cấu hình
        </NavLink>
        <NavLink
          activeClassName="nav-primary-active"
          to="/report"
          className="nav-primary__item"
        >
          Báo cáo
        </NavLink>
      </ul>
      <NavLink className="nav-profile" to="">
        <div className="nav-avatar" to="">
          L
        </div>
      </NavLink>
    </div>
  );
}
export default HeaderMenu;
