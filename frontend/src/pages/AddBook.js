import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/AxiosConfig";

const AddBook = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");

  const createBook = async (bookData) => {
    try {
      const response = await api.post("/api/books", bookData);
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook({ title, author, publisher, isbn });
  };

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="form-card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                name="title"
                placeholder="Enter name of Book"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Author:</label>
              <input
                type="text"
                name="author"
                placeholder="Enter name of Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">Publisher:</label>
              <input
                type="text"
                name="publisher"
                placeholder="Enter name of Publisher"
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="">ISBN:</label>
              <input
                type="text"
                name="isbn"
                placeholder="Enter ISBN"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <div className="button-group">
                <Link to={"/"}>
                  <button className="bg-cyan-700 text-white p-4 rounded-md">
                    Go Back
                  </button>
                </Link>
                <button className="bg-green-500 text-white p-4 rounded-md mx-6">
                  New Book
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
