import React from "react";
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <Toolbar></Toolbar>
      <SettingBar></SettingBar>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
