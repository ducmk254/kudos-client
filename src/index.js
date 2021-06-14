import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import Users from "./Components/Users/Users";
import Reports from "./Components/Reports";
import AppRoute from "./Components/App";
import HomePage from "./Components/HomePage";
import UserDetail from "./Components/Users/UserDetail";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <AppRoute path="/users/a" component={UserDetail} />
        <AppRoute path="/users" component={Users} />
        <AppRoute path="/reports" component={Reports} />
        <AppRoute path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
