import React from "react";
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";

function App() {
    const socket = new WebSocket('ws://localhost:5000/')
    socket.onopen = () => {
        socket.send(JSON.stringify({
            method: 'connection',
            id: 555,
            username: 'vlad'
        }))
    }
    socket.onmessage = (event) => {
        console.log('С сервера пришло сообшение:', event.data)
    }
    const sendMassage = () => {
        socket.send(JSON.stringify({
            message: "Привет",
            method: 'message',
            id: Date.now(),
            username: 'vlad'
        }))
    }
  return (
    <div className="App">
        <button onClick={() => sendMassage()}>111111111111</button>
      <Toolbar></Toolbar>
      <SettingBar></SettingBar>
      <Canvas></Canvas>
    </div>
  );
}

export default App;
