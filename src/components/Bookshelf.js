import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

const Bookshelf = props => (
  <div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                thumbnail={book.imageLinks.thumbnail}
                onBookAction={props.onBookUpdate}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  </div>
);

Bookshelf.prototypes = {
  books: PropTypes.array.isRequired,
  onBookUpdate: PropTypes.func.isRequired
};

export default Bookshelf;
