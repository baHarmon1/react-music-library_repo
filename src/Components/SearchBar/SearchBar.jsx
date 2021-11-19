import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        search: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.className]: event.target.value,
    });
  };

  render() {
    return (
      <header className="p-3 bg-dark text-white">
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            onChange={this.handleChange}
            type="search"
            className="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
            value={this.state.className}
          ></input>
        </form>
      </header>
    );
  }
}

export default SearchBar;
