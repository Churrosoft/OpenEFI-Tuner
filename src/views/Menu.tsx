import './css/layout.scss';
import AdjustIcon from '@material-ui/icons/Adjust';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Menu() {
    return(
          <div id="menu">
            <a href="test.html">
              <div id="menu-item-active">
                <DashboardIcon id="menu-item-icon" />
                Panel
              </div>
              <div id="menu-item">
                <img id="menu-item-icon" src="https://img.icons8.com/android/24/000000/engine.png" />
                DTC
            </div>
            </a>
            <div id="menu-item">
              <AdjustIcon id="menu-item-icon" /> Tablas
            </div>
            <div id="menu-item">
              <AdjustIcon id="menu-item-icon" /> Configuracion
            </div>
          </div>
          );
}

export default Menu;