import React, { useState } from "react";
import { Button, Avatar } from "antd";

import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "./HeaderMenu.css";
import { SearchOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import TopicMenu from "./TopicMenu";
function HeaderMenu(props) {
  const [visible, setVisible] = useState(false);
  const [textSearch, setTextSearch] = useState("");
  const onClick = () => {
    setVisible(false);
  };
  const handleInputTextSearch = (e) => {
    setTextSearch(e.target.value);
  };
  return (
    <div className="header">
      <div className="header-left">
        <Drawer
          title="Dashboard"
          placement="left"
          onClose={() => setVisible(false)}
          visible={visible}
          className="show-hide-top-menu"
        >
          <TopicMenu handleOnClick={onClick} />
        </Drawer>
        <div className="header-left__link">
          <NavLink to="/">
            <img
              src={"/images/logo-mutosi.jpg"}
              alt="mutosi logo"
              className="header-left__logo"
            />
          </NavLink>
        </div>
        <Button
          className="menu"
          type="primary"
          icon={<MenuOutlined style={{ fontSize: "2rem" }} />}
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="header-right">
        <form className="nav-search__form">
          <input
            type="text"
            placeholder="Tìm kiếm ..."
            className="nav-search__input"
            value={textSearch}
            onChange={handleInputTextSearch}
          />
          <SearchOutlined className="nav-search__icon" />
        </form>

        <NavLink
          className="nav-profile-link "
          activeClassName="nav-profile-active"
          to="#"
        >
          {/* <span className="nav-avatar-title">KC</span> */}
          <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
            U
          </Avatar>
        </NavLink>
      </div>
    </div>
  );
}
export default HeaderMenu;
