import React from "react";
import { Route } from "react-router-dom";
import Layout from "./Layout/index";
const AppRoute = ({ component: Component, rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};
export default AppRoute;
