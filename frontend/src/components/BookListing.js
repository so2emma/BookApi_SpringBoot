import React from "react";
import { Link } from "react-router-dom";

const BookListing = ({ Books }) => {
  let counter = 1;
  return (
    <div>
      {Books?.map((book) => (
        <a href="">
          <div key={book.id} className="book-list">
            <p>
              <b>{counter++}. Title:</b> {book.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default BookListing;
