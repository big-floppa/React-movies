import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      search: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setSearchText(this.state.search);
  };

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="search">Search</label>
            <input
              placeholder="Например, Великий Гэтсби"
              id="search"
              onChange={this.handleChange}
              value={this.state.search}
              type="search"
              className="validate"
            />

            <button className={`btn search-btn blue`} type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
