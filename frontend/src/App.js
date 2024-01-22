import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/AxiosConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <div className="bg-blue-950 h-screen">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api/books/:id" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
