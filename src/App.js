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
    </div>
    <div className = "button2" id="showStation">
    </div>
    <div className = "information" id="data">
    <h2>Apollo Missions</h2>
    <ul>
    <li><div className = "rocket1"><i class="fas fa-rocket"></i></div> Station A11 | 1969 - 1969</li>
    <li><div className = "rocket2"><i class="fas fa-rocket"></i></div> Station A12 | 1969 - 1977</li>
    <li><div className = "rocket3"><i class="fas fa-rocket"></i></div> Station A14 | 1971 - 1977</li>
    <li><div className = "rocket4"><i class="fas fa-rocket"></i></div> Station A15 | 1971 - 1977</li>
    <li><div className = "rocket5"><i class="fas fa-rocket"></i></div> Station A16 | 1972 - 1977</li>


  

    </ul>
    </div>

    <img className="logoApp" src={logo} />

          <Scene />
    </div>
    
    
    );
}

export default App;
