import React, { Component } from 'react';
import Movies from '../components/Movies';
import Pagination from '../components/Pagination';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pages: 1,
      activePage: 1,
      isLoading: true,
      language: 'ru',
      searchText: '',
    };
  }

  getAPIQuery = (page = 1, searchingText = '') => {
    return `https://api.themoviedb.org/3/${
      searchingText ? 'search/' : 'discover/'
    }movie?api_key=${API_KEY}&page=${page}&query=${searchingText}&language=${this.state.language}`;
  };

  setSearchText = (text) => {
    fetch(this.getAPIQuery(1, text))
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          searchText: text,
          pages: data.total_pages,
          movies: data.results,
          activePage: 1,
          isLoading: false,
        });
      });
  };

  setActivePage = (page) => {
    fetch(this.getAPIQuery(page, this.state.searchText))
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          pages: data.total_pages,
          activePage: page,
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    fetch(this.getAPIQuery(this.state.pages, this.state.searchText))
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          movies: data.results,
          pages: data.total_pages,
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <main>
        <div className="container">
          <Search setSearchText={this.setSearchText} />

          {this.state.pages > 1 ? (
            <Pagination
              activePage={this.state.activePage}
              setActivePage={this.setActivePage}
              pageNeighbours={2}
              totalPages={this.state.pages}
            />
          ) : null}

          {this.state.isLoading ? <Preloader /> : <Movies movies={this.state.movies} />}
        </div>
      </main>
    );
  }
}

export default Main;
