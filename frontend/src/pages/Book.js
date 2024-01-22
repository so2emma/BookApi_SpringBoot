import React from "react";
import { useState, useEffect } from "react";
import api from "../api/AxiosConfig";

const Book = ({ id }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const response = await api.get(`/api/books/${id}`);
      setBook(response.data);
    };
    getBook();
  }, []);

  const { title, author, publisher, isbn } = book;

  return (
    <div>
      <div  className="book-list">
        <p>
          <b> Title:</b> {title}
        </p>
        <p>
          <b> Author:</b> {author}
        </p>
        <p>
          <b> Publisher:</b> {publisher}
        </p>
        <p>
          <b> ISBN:</b> {isbn}
        </p>
      </div>
    </div>
  );
};

export default Book;
