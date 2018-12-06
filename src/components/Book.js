import React from "react";
import PropTypes from "prop-types";

import BookAction from "./BookAction";

const Book = props => {
  const { thumbnail, book, onBookAction } = props;
  const { title, authors } = book;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumbnail})`
          }}
        />
        <BookAction book={book} onBookAction={onBookAction} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">
        {authors.map((author, index) => (
          <span key={index}>
            {author} <br />
          </span>
        ))}
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onBookAction: PropTypes.func.isRequired
};

export default Book;
