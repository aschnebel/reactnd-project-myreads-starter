import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./Header";
import Bookshelf from "./Bookshelf";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookUpdate: PropTypes.func.isRequired
  };

  getBooksForShelf = shelf => {
    return this.props.books.filter(book => book.shelf === shelf);
  };

  render() {
    const { onBookUpdate } = this.props;

    return (
      <div className="list-books">
        <Header />
        <Bookshelf
          title="Currently Reading"
          books={this.getBooksForShelf("currentlyReading")}
          onBookUpdate={onBookUpdate}
        />
        <Bookshelf
          title="Want to read"
          books={this.getBooksForShelf("wantToRead")}
          onBookUpdate={onBookUpdate}
        />
        <Bookshelf
          title="Read"
          books={this.getBooksForShelf("read")}
          onBookUpdate={onBookUpdate}
        />
      </div>
    );
  }
}

export default ListBooks;
