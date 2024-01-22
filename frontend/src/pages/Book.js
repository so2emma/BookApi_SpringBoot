import React, { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import api from "../api/AxiosConfig";
import { useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { title, author, publisher, isbn } = book;


  useEffect(() => {
    console.log(id);
    const getBook = async () => {
      try {
        const response = await api.get(`/api/books/${id}`);
        setBook(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.delete(`/api/books/${id}`);
      console.log(response.data);
      navigate('/');
    }
    catch(err) {
      console.log(err)
    }

  }

  if (loading) return <div>Loading...</div>; // Or your custom loading component
  if (error) return <div>An error occurred: {error.message}</div>;


  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="single-book">
        <p>
          <b>Title:</b> {title}
        </p>
        <p>
          <b>Author:</b> {author}
        </p>
        <p>
          <b>Publisher:</b> {publisher}
        </p>
        <p>
          <b>ISBN:</b> {isbn}
        </p>
      </div>

      <div className="button-group">
        <Link to={"/"}>
          <button className="bg-cyan-700 text-white p-4 rounded-md">
            Go Back
          </button>
        </Link>

        <form onSubmit={handleSubmit} className="mx-6">
          <button className="bg-red-700 text-white p-4 rounded-md">
            Delete
          </button>
        </form>

      </div>
    </div>
  );
};

export default Book;
