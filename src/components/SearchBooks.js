import React, { Component } from "react";
import PropTypes from "prop-types";
import * as BooksAPI from "./../BooksAPI";

import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResults from "./SearchBooksResults";

class SearchBooks extends Component {
  static propTypes = {
    savedBooks: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  };

  state = {
    books: [],
    error: ""
  };

  handleSearch = query => {
    if (query) {
      BooksAPI.search(query).then(result => {
        if (result.error) {
          this.setState(() => ({
            error: result.error
          }));
        } else {
          result = result.map(book => {
            const match = this.props.savedBooks.filter(
              savedBook => savedBook.id === book.id
            );
            return match.length !== 0 ? match[0] : book;
          });

          this.setState(() => ({
            books: result,
            error: ""
          }));
        }
      });
    } else {
      this.setState(() => ({
        books: [],
        error: ""
      }));
    }
  };

  render() {
    const { books, error } = this.state;
    const { onBookUpdate } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar onSearchQuery={this.handleSearch} />
        <div className="search-books-results">
          {error ? (
            <h2>{error}</h2>
          ) : (
            <SearchBooksResults books={books} onBookUpdate={onBookUpdate} />
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
