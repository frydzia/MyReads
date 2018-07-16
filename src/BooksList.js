import React, { Component } from 'react';

class BooksList extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.books.map((book) =>
            <div key={book.id} className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
                <div className="book-shelf-changer"></div>
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
