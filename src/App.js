import React from "react";
import './styles/app.scss';
import {Routes, Route, Navigate, BrowserRouter,} from "react-router-dom";
import PagePaint from "./pages/PagePaint";

function Test() {
    return null;
}

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/test" element={<Test/>} />
              <Route path="/:id" element={<PagePaint/>} />
              <Route path="/" element={<Navigate replace to={`f${(Date.now()).toString(16)}`} />} />
          </Routes>
      </BrowserRouter>

  );
}

export default App;
