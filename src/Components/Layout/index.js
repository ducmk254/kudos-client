import React from "react";
import { Layout } from "antd";
import "./index.css";
import SideMenu from "./SideMenu";
import HeaderMenu from "./HeaderMenu";

// import Footers from "./Footers";
const { Content } = Layout;
const AppRoute = ({ children }) => {
  return (
    <Layout>
      <HeaderMenu></HeaderMenu>
      <Layout>
        <SideMenu breakpoint={"lg"} />
        <Layout style={{ padding: "0 24px 24px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background site-layout-backgroud__note"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
      {/* <Layout>
        <Footers />
      </Layout> */}
    </Layout>
  );
};
export default AppRoute;
