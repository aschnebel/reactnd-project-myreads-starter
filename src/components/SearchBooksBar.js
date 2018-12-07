import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchBooksBar extends Component {
  static propTypes = {
    onSearchQuery: PropTypes.func.isRequired
  };

  state = {
    query: ""
  };

  componentWillMount() {
    this.timer = null;
  }

  handleChange = value => {
    clearTimeout(this.timer);
    this.setState(() => ({
      query: value
    }));
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  handleKeyDown = event => {
    if (event.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    this.props.onSearchQuery(this.state.query);
  };

  render() {
    return (
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.state.query}
            onChange={event => this.handleChange(event.target.value)}
            onKeyDown={this.handleKeyDown}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

export default SearchBooksBar;
