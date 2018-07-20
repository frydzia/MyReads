import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';
import { Link, Route } from 'react-router-dom';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  //  showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  getBooksWithTheSameShelf(shelfName) {
    return this.state.books.filter((b) => b.shelf === shelfName)
  }

  moveBooksToNewShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;

      this.setState(state => ({
        books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
      }));
    });
  };

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf
                books={this.getBooksWithTheSameShelf("currentlyReading")}
                shelfTitle="Currently Reading"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
              <Shelf
                books={this.getBooksWithTheSameShelf("wantToRead")}
                shelfTitle="Want To Read"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
              <Shelf
                books={this.getBooksWithTheSameShelf("read")}
                shelfTitle="Read"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
            </div>
            <Link
              to='/search'
              className="open-search">
                Add a book
            </Link>
          </div>
        )}/>

        <Route path='/search' render={() => (
          <p>Hello</p>
        )}/>

      </div>
    )
  }
}

export default BooksApp
