//React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//Views:
import Panel from './Panel';
import CFG from './CFG';
//SCSS e iconos
import './css/layout.scss';
import AdjustIcon from '@material-ui/icons/Adjust';
import DashboardIcon from '@material-ui/icons/Dashboard';

function getval() {
  return Math.floor(Math.random() * 50 + 1);
}
function getValue2() {
  return Math.floor(Math.random() * 4000 + 1);
}

ReactDOM.render(
  <div className="Main">
    <div id="head">
      <div id="head-titulo">
        <h1>OpenEFI || Tunner</h1>{" "}
      </div>
    </div>
    <div id="container">
      <Router>

        <div id="menu">

          <NavLink exact to="/" activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">  
              <DashboardIcon id="menu-item-icon" /> Panel 
            </div>
          </NavLink>
          
          <NavLink exact to="/DTC" activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
              <img id="menu-item-icon" src="https://img.icons8.com/android/24/000000/engine.png" /> DTC 
            </div>
          </NavLink>

          <NavLink exact to="/Tablas" activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
            <AdjustIcon id="menu-item-icon" /> Tablas
            </div>
          </NavLink>
          
          <NavLink exact to="/CFG" activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
              <AdjustIcon id="menu-item-icon" /> Configuracion
            </div>
          </NavLink>

        </div>

        <Route path="/" exact render={(props) => <Panel getRPM={getValue2} getTemp={getval} />} />
        <Route path="/CFG" render={(props) => <CFG />} />

      </Router>

    </div>
  </div>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
