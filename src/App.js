import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
//const shortid = require("shortid");
import shortid from "shortid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <h3>about</h3>
        </Route>
        <Route path="/users">
          <h3>users</h3>
        </Route>
        <Route path="/">
          <h3>Home</h3>
        </Route>
      </Switch>
    </Router>
  );
}
