import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Switch } from "react-router-dom";
import Users from "./Components/Users";
import Reports from "./Components/Reports";
import AppRoute from "./Components/App";
import HomePage from "./Components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <AppRoute path="/users" component={Users} />
        <AppRoute path="/reports" component={Reports} />
        <AppRoute path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
