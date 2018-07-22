import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBooksToNewShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    booksFromSearch: [],
    searchResult: false
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ? this.setState({ booksFromSearch: books }) : this.setState({ booksFromSearch: [], searchResult: true })
      })
    } else this.setState({ booksFromSearch: [], searchResult: false })
  }

  render() {
    return (
      <div className="search-books">
          <div className="search-books-bar">
            <Link
              to='/'
              className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            { this.state.booksFromSearch.length > 0 &&
              <ol className="books-grid">
                {this.state.booksFromSearch.map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      moveBooksToNewShelf={this.props.moveBooksToNewShelf}
                      shelf={this.props.shelf}
                    />
                  </li>
                ))}
              </ol>
            }
            { this.state.searchResult === true &&
              <p>No search results!</p>
            }
          </div>
        </div>
    )
  }
}

export default Search
