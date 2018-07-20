import React, { Component } from 'react';
import Book from './Book.js';
import PropTypes from "prop-types";

class Shelf extends Component {
  static propTypes = {
    moveBooksToNewShelf: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <Book
                  book={book}
                  moveBooksToNewShelf={this.props.moveBooksToNewShelf}
                  shelf={this.props.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf
