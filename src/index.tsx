//React
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//Redux:
import mystore from './redux-serial';
//Views:
import Panel from './Panel';
import CFG from './views/CFG';
import DTC from './views/DTC';
//Header:
import Head from './Head';
//SCSS e iconos
import './css/layout.scss';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Brightness5Icon from '@material-ui/icons/Brightness5';
//API Serial
import SerialAPI from './serial';
import { Button } from '@material-ui/core';

//iniciamo'
const myApi = new SerialAPI();

function getval() {
  return Math.floor(Math.random() * 50 + 1);
}

const actualizarRPM = () =>{
  mystore.dispatch({ type: 'RPM_UPDATE' });
}

ReactDOM.render(
  <div className="Main">
   <Head 
    Init={myApi.run}
    GetVer={myApi.getValues}
    isConected={myApi.isConected}
   />
    <div id="container">
      <Router>

        <div id="menu">
        {/*<Button 
        onClick={ actualizarRPM}
        >ENROSCAR EL TUTU</Button>*/}
          <NavLink exact to="/"       activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">  
              <DashboardIcon id="menu-item-icon" /> Panel 
            </div>
          </NavLink>
          
          <NavLink exact to="/DTC"    activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
              <img id="menu-item-icon" src="https://img.icons8.com/android/24/000000/engine.png" alt="engine-icon"/> DTC 
            </div>
          </NavLink>

          <NavLink exact to="/Tablas" activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
              <ListAltIcon id="menu-item-icon" /> Tablas
            </div>
          </NavLink>
          
          <NavLink exact to="/CFG"    activeStyle={{ color: "#428cd1" }} >
            <div id="menu-item">
              <Brightness5Icon id="menu-item-icon" /> Configuracion
            </div>
          </NavLink>

        </div>

        <Route path="/"    exact render={(props) => <Panel getTemp={getval} getValues={myApi.getValues}/>} />
        <Route path="/CFG"       render={(props) => <CFG />} />
        <Route path="/DTC"       render={(props) => <DTC />} />
      </Router>

    </div>
  </div>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
