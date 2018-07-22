import React, { Component } from 'react';
import ShelfChanger from "./ShelfChanger";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
      book: PropTypes.object.isRequired,
      moveBooksToNewShelf: PropTypes.func.isRequired
  };

  render() {
    const cover = this.props.book.imageLinks && this.props.book.imageLinks.thumbnail ? this.props.book.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_colour.jpg/180px-Black_colour.jpg"

    return (
      <div>
        <div id={this.props.book.id} className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${cover}")` }}></div>
            <ShelfChanger
              book={this.props.book}
              moveBooksToNewShelf={this.props.moveBooksToNewShelf}
              shelf={this.props.currentShelf}
          />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </div>
    )
  }
}

export default Book
