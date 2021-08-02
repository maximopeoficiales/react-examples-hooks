import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import AboutPage from "./AboutPage/AboutPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <NavLink
              activeClassName="active"
              exact
              className="nav-item nav-link "
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="active"
              exact
              to="/about"
              className="nav-item nav-link"
            >
              About
            </NavLink>
            <NavLink
              activeClassName="active"
              exact
              to="/login"
              className="nav-item nav-link"
            >
              Login
            </NavLink>
          </div>
        </nav>
        <div className="my-4">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
