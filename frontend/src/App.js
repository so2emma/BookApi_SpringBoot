import "./App.css";
import { useState, useEffect } from "react";
import api from "./api/AxiosConfig";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await api.get("/api/books");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
