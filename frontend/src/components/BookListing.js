import React from "react";

const BookListing = ({ Books }) => {
 return (
    <div>
      {Books?.map((book) => (
        <div key={book.id}>
          <p> <b>Title:</b> {book.title}</p>
          <p><b>Author: </b> {book.author}</p>
          <p> <b>Publisher:</b> {book.publisher}</p>
          <p> <b>ISBN:</b>  {book.isbn}</p>
        </div>
      ))}
    </div>
 );
};

export default BookListing;
