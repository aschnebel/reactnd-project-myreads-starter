import React from "react";
import { Route, Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import Header from "./Header/Header";
import BookList from "./BookList/BookList";
import SearchBooks from "./SearchBooks/SearchBooks";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/search" component={SearchBooks} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Header />
              <div className="list-books-content">
                <BookList />
              </div>
              <div className="open-search">
                <Link className="search-btn" to="/search">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
