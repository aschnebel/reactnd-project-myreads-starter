import React, { Component } from "react";

import Header from "./Header";
import Bookshelf from "./Bookshelf";

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <Header />
        <Bookshelf />
      </div>
    );
  }
}

export default ListBooks;
