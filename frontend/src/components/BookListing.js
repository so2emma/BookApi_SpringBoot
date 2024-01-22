import React from "react";

const BookListing = ({ Books }) => {
 return (
    <div>
      {Books?.map((book) => (
        <div key={book.id} className="block border- border-solid  p-3">
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
