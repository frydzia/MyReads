import React, { Component } from 'react';
import ShelfChanger from "./ShelfChanger";

class BooksList extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.books.map((book) =>
            <div key={book.id} className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                <ShelfChanger
                  shelf={this.props.currentShelf} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.author}</div>
            </div>
          )}
        </li>
      </div>
    )
  }
}

export default BooksList
