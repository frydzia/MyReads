import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Shelf from './Shelf';



class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
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

  // componentDidUpdate(prevState) {
  //   if (this.state.book.id !== prevState.book.id) {
  //     BooksAPI.update(book, shelf).then(
  //       this.setState((state) => ({
  //       books: this.state.books.filter(book.id !== prevState.book.id).concat([ book ])
  //       }))
  //     )
  //   }
  // }

  moveBooksToNewShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;

      this.setState(state => ({
        books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
      }));
    });
  };

  // {
  //   BooksAPI.update(book, shelf).then(this.state((prevState) => {
  //     const newState = prevState.books.map(b => b.id !== book.id)
  //   })
  //
  //   var currentBooks = [...this.state.books]
  //   var booksToUpdate = currentBooks.filter(b => b.id !== book.id)  // get list of books without updated or new book
  //
  //
  //
  //     book.shelf = newShelf;
  //
  // //    var newBooks = this.state.books.filter((b) => b.id !== book.id);
  //
  //     this.setState((state) => ({
  //       books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
  //     }))
  //   });
  // }

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf
                books={ this.getBooksWithTheSameShelf("currentlyReading") }
                shelfTitle="Currently Reading"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
              <Shelf
                books={ this.getBooksWithTheSameShelf("wantToRead") }
                shelfTitle="Want To Read"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
              <Shelf
                books={ this.getBooksWithTheSameShelf("read") }
                shelfTitle="Read"
                moveBooksToNewShelf={this.moveBooksToNewShelf}
              />
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
