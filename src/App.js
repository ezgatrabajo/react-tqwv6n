import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Contacto from "./views/Contacto";
import Inicio from "./views/Inicio";
import Nosotros from "./views/Nosotros";

//const shortid = require("shortid");
import shortid from "shortid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="container">App</div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className="btn btn-primary"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="btn btn-primary"
              activeClassName="active"
            >
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className="btn btn-primary"
              activeClassName="active"
            >
              Nosotros
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/about">
          <Contacto />
        </Route>
        <Route path="/users">
          <Nosotros />
        </Route>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  );
}
