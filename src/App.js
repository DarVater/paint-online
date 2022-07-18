import React from "react";
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import SettingBar from "./components/SettingBar";
import Canvas from "./components/Canvas";
import {Routes, Route, Navigate, Redirect, BrowserRouter,} from "react-router-dom";
import PagePaint from "./pages/PagePaint";

function App() {
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
