import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const SearchBooksResults = props => (
  <ol className="books-grid">
    {props.books.map(book => (
      <li key={book.id}>
        <Book
          book={book}
          onBookAction={props.onBookUpdate}
        />
      </li>
    ))}
  </ol>
);

SearchBooksResults.propTypes = {
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default SearchBooksResults;
