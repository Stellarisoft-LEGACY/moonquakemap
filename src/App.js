import './App.css';
import React from "react";
import logo from './stellarisoft.png';
import Scene from './components/Scene';



function App() {
  return (

    <div className = "App"> 
    <div className = "test">
      <h1>Vibratio13 - A 3D Moonquake map made with Three.js  </h1>
    </div>
    <div className = "button1" id="showMesh">
      <h1>Lat/Lon</h1>
    </div>
    <div className = "button2" id="showStation">
      <h1>Stations</h1>

    </div>
    <div className = "information" id="data">
    <h2>Apollo Missions</h2>
    <ul>
    <li><div className = "rocket1"><i class="ri-rocket-2-fill"></i></div> Station A11 | 1969 - 1969</li>
    <li><div className = "rocket2"><i class="ri-rocket-2-fill"></i></div> Station A12 | 1969 - 1977</li>
    <li><div className = "rocket3"><i class="ri-rocket-2-fill"></i></div> Station A14 | 1971 - 1977</li>
    <li><div className = "rocket4"><i class="ri-rocket-2-fill"></i></div> Station A15 | 1971 - 1977</li>
    <li><div className = "rocket5"><i class="ri-rocket-2-fill"></i></div> Station A16 | 1972 - 1977</li>
    <li><div className = "origin"><i class="ri-map-pin-2-fill"></i></div> Prime meridian 0°E / 0°S</li>
    </ul>
    </div>

    <div className = "moonquakeBox">
    <div className = "moonquake1969" id="1969">
      <h1>Moonquake1969</h1>
    </div>
    <div className = "moonquake1970" id="1970">
      <h1>Moonquake1970</h1>
    </div>
    <div className = "moonquake1971" id="1971">
      <h1>Moonquake1971</h1>
    </div>
    <div className = "moonquake1972" id="1972">
      <h1>Moonquake1972</h1>
    </div>
    <div className = "moonquake1973" id="1973">
      <h1>Moonquake1973</h1>
    </div>
    <div className = "moonquake1974" id="1974">
      <h1>Moonquake1974</h1>
    </div>
    <div className = "moonquake1975" id="1975">
      <h1>Moonquake1975</h1>
    </div>
    <div className = "moonquake1976" id="1976">
      <h1>Moonquake1976</h1>
    </div>
    <div className = "moonquake1977" id="1977">
      <h1>Moonquake1977</h1>
    </div>
    </div>

    
    
    <img className="logoApp" src={logo} />

          <Scene />
    </div>
    
    
    );
}

export default App;
