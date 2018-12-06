import React, { Component } from "react";
import PropTypes from "prop-types";

class BookAction extends Component {
  static prototypes = {
    book: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    onBookAction: PropTypes.func.isRequired
  };

  state = {
    shelf: ""
  };

  static getDerivedStateFromProps(props, prevState) {
    const { shelf } = props.book;
    if (prevState.shelf !== shelf) {
      return {
        shelf: shelf
      };
    }
    return null;
  }

  render() {
    const { shelf } = this.state;
    const { book, onBookAction } = this.props;

    return (
      <div className="book-shelf-changer">
        <select value={shelf} onChange={() => onBookAction(book, shelf)}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookAction;
