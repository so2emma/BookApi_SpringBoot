import React from "react";
import { Link } from "react-router-dom";

const BookListing = ({ Books }) => {
  let counter = 1;
  return (
    <div>
      {Books?.map((book) => (
        <Link key={book.id} to={`/api/books/${book.id}`}>
          <div key={book.id} className="book-list">
            <p>
              <b>{counter++}. Title:</b> {book.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BookListing;
