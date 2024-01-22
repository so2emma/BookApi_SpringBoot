import React from "react";
import { Link } from "react-router-dom";

const BookListing = ({ Books }) => {
  let counter = 1;
  return (
    <div>
      {Books?.map((book) => (
        <div>
          <Link key={book.id} to={`/api/books/${book.id}`}>
            <div key={book.id} className="book-list">
              <p>
                <b>{counter++}. Title:</b> {book.title}
              </p>
            </div>
          </Link>

          <Link key={book.id} to={`/api/books/update/${book.id}`}>
            <div>
              <button className="bg-blue-600 text-white p-4 rounded-md">Update Book</button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookListing;
