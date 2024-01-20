import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/AxiosConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
