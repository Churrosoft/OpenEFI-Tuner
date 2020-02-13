import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

//SCSS:
import '../css/cfg.scss';

//Subviews:
import INY from './CFG/Inyeccion';
import Info from './CFG/Info';

class CFG extends React.Component{
  
    render() {
        return (
          <div id="container-3">
            <Router>
              <div id="menu-cfg">
                <NavLink exact to="/CFG/"       activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> Info </div>
                </NavLink>
                <NavLink exact to="/CFG/INY"    activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> Inyeccion </div>
                </NavLink>
                <NavLink exact to="/CFG/ECN"    activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> Encendido </div>
                </NavLink>
                <NavLink exact to="/CFG/GNC"    activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> GNC/GLP </div>
                </NavLink>
                <NavLink exact to="/CFG/DTC"    activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> DTC </div>
                </NavLink>
                <NavLink exact to="/CFG/SYS"    activeStyle={{ color: "#428cd1" }}>
                  <div id="menu-cfg-item"> Sistema </div>
                </NavLink>
              </div>
              <Route path="/CFG"        exact render={props => <Info />} />
              <Route path="/CFG/INY"    exact render={props => <INY />} />
            </Router>
          </div>
        );
    };
}

export default CFG;