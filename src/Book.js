import React, { Component } from 'react';
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
  render() {
    return (
      <div>
        <div id={this.props.book.id} className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }}></div>
            <ShelfChanger
              shelf={this.props.currentShelf} />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.author}</div>
        </div>
      </div>
    )
  }
}

export default Book
