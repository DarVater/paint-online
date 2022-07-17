import React from "react";
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {Routes, Route, Navigate, Redirect, BrowserRouter,} from "react-router-dom";
import PagePaint from "./pages/PagePaint";

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
      <BrowserRouter>
          <Routes>
              <Route path="/:id" element={<PagePaint/>} />
              <Route path="/" element={<Navigate replace to={`f${(Date.now()).toString(16)}`} />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
