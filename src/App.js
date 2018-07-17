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

  // updateBook() {
  //   BooksAPI.update(book, shelf).then()
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
              />
              <Shelf
                books={ this.getBooksWithTheSameShelf("wantToRead") }
                shelfTitle="Want To Read"
              />
              <Shelf
                books={ this.getBooksWithTheSameShelf("read") }
                shelfTitle="Read"
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
