import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/AxiosConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {


  return (
    <div className="bg-blue-950 h-screen">
      <Nav />
      <Home />
      {/* <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
